export default function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Claim Your Skin Consultation</h2>
      <p>
        Receive launch offers, seasonal treatment drops, and expert skincare
        notes from Kiki&apos;s Laser Spa.
      </p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email address.." />
        <button type="submit">Join</button>
      </form>
    </section>
  );
}
