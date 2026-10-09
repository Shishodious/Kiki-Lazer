import express from "express";
import cors from "cors";
import { Resend } from "resend";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// Visitor input goes into an HTML email, so escape it before interpolating.
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const FIELD_LIMITS = { name: 200, email: 320, phone: 50, service: 200, message: 5000 };

app.post("/api/contact", async (req, res) => {
  const fields = {};
  for (const key of Object.keys(FIELD_LIMITS)) {
    const value = req.body?.[key];
    fields[key] = typeof value === "string" ? value.trim() : "";
  }
  const { name, email, phone, service, message } = fields;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  const tooLong = Object.keys(FIELD_LIMITS).find((key) => fields[key].length > FIELD_LIMITS[key]);
  if (tooLong) {
    return res.status(400).json({ error: `Please shorten the ${tooLong} field and try again.` });
  }

  try {
    // Resend reports API failures (bad key, unverified sender, rate limits) in `error`
    // rather than throwing, so both paths have to be checked.
    const { data, error } = await resend.emails.send({
      from: "Kiki's Laser Spa <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission - ${(service || "General Enquiry").replace(/[\r\n]+/g, " ")}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "Not provided"}</p>
        <p><strong>Service Interest:</strong> ${service ? escapeHtml(service) : "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\r?\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, "dist")));

// SPA fallback: serve index.html for any non-API route
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});