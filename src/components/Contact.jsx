export default function Contact() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Madhura Gondhalekar</h3>
          <p>UI Developer & Frontend Engineer</p>
        </div>

        <div className="footer-socials">

          <a
            href="mailto:mgondhalekar7@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Gmail"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Gmail"
            />
          </a>

          <a
            href="https://github.com/madhura1105"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
            />
          </a>

          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
            />
          </a>

        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Madhura Gondhalekar
      </div>
    </footer>
  );
}