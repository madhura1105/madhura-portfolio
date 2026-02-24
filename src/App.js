import CatCursor from "./components/CatCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import StarsBackground from "./components/StarsBackground";
import CaseStudy from "./components/CaseStudy";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
      <CatCursor />
      <StarsBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <CaseStudy />
      <Contact />
    </>
  );
}

export default App;