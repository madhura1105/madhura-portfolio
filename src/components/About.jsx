export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-left">
          <h2>About Me</h2>

          <p>
            I'm a UI Developer and Frontend Engineer passionate about building
            immersive, performance-driven web experiences. My work blends
            thoughtful design systems with scalable frontend architecture.
          </p>

          <p>
            I specialize in creating responsive interfaces that feel intentional,
            minimal, and fluid. From LMS platforms and WebRTC integrations to
            marketing-driven applications and AI-assisted systems, I focus on
            crafting products that are both elegant and technically sound.
          </p>

      <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="cta-btn"
>
  My Resume
</a>
        </div>

        <div className="about-right">
          <div className="about-card-3d">
            <h3>What I Focus On</h3>
            <ul>
              <li>Scalable Design Systems</li>
              <li>Modern React Architecture</li>
              <li>Performance & Accessibility</li>
              <li>Clean Visual Hierarchy</li>
              <li>Interactive Micro-Animations</li>
            </ul>
          </div>
        </div> 

      </div>
    </section>
  );
}