export default function Projects() {
  const projects = [
    {
      title: "Freedom Threads",
      desc: "Premium fashion e-commerce interface.",
      img: "/projects/freedom.jpg",
      github: "https://www.notion.so/Freedom-Threads-23e51e09126c80be8e32e385372ce2a2?source=copy_link"
    },
    {
      title: "Space Link",
      desc: "LAN-based LMS with WebRTC integration.",
      img: "/projects/spacelink.jpg",
      github: "https://github.com/madhura1105"
    },
    {
      title: "Happy Minds",
      desc: "Mental health UI application with interactive exercises.",
      img: "/projects/happyminds.jpg",
      github: "https://www.notion.so/happy-minds-23e51e09126c81479c40c60b0b5f0e0c?source=copy_link"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}