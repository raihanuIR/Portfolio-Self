import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="portfolio-app-wrapper" style={{ position: "relative" }}>
      {/* Ambient background glow points */}
      <div className="glow-orb glow-orb-purple" style={{ top: "5vh", left: "10vw" }}></div>
      <div className="glow-orb glow-orb-teal" style={{ top: "90vh", right: "10vw" }}></div>
      <div className="glow-orb glow-orb-purple" style={{ top: "220vh", left: "5vw" }}></div>
      <div className="glow-orb glow-orb-teal" style={{ top: "350vh", right: "5vw" }}></div>
      <div className="glow-orb glow-orb-purple" style={{ top: "450vh", left: "10vw" }}></div>

      {/* Main navigation */}
      <Navbar />

      {/* Main page content sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
