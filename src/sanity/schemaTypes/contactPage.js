import { defineField, defineType } from "sanity";
import { fallbackContent } from "../../lib/fallbackContent";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  initialValue: fallbackContent.contactPage,
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero Eyebrow", type: "string" }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "text",
      rows: 3,
      description: "Use line breaks to create multiple lines.",
    }),
    defineField({
      name: "heroBackground",
      title: "Hero Background",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "heroBackgroundAlt", title: "Hero Background Alt", type: "string" }),
    defineField({
      name: "serviceOptions",
      title: "Treatment Options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "faqEyebrow", title: "FAQ Eyebrow", type: "string" }),
    defineField({ name: "faqHeading", title: "FAQ Heading", type: "string" }),
    defineField({ name: "faqSubtitle", title: "FAQ Subtitle", type: "string" }),
    defineField({ name: "successTitle", title: "Success Title", type: "string" }),
    defineField({ name: "successBody", title: "Success Body", type: "text", rows: 3 }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 5 }),
          ],
          preview: {
            select: { title: "question", subtitle: "answer" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Contact Page",
    }),
  },
});
