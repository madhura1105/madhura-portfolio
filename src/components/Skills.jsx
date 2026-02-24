export default function Skills() {
  const skills = [
    "React.js",
    "JavaScript",
    "HTML5 & CSS3",
    "Responsive Design",
    "Figma",
    "UI Development",
    "GitHub",
    "WebRTC",
    "GenAI"
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="card-grid">
        {skills.map((skill, index) => (
          <div key={index} className="info-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}