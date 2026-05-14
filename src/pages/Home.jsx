import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="site-shell">
      <main className="page">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <About />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}
