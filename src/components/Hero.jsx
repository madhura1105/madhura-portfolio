export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="intro">Hi, I'm</p>

        <h1 className="name">
          Madhura Gondhalekar
        </h1>

        <h2 className="role">
          UI & Frontend Developer
        </h2>

        <p className="description">
          I build elegant, responsive and performance-driven
          digital experiences with modern UI systems.
        </p>

        <a
          href="https://www.notion.so/Creative-Work-23e51e09126c8071a74afc72d730788d?source=copy_link"
          target="_blank"
          rel="noreferrer"
          className="cta-btn"
        >
          View Creative Portfolio
        </a>
      </div>

      <div className="hero-right">
        <img src="/profile.jpg" alt="Madhura" />
      </div>
    </section>
  );
}