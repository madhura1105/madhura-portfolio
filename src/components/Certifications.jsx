export default function Certifications() {
  const certs = [
    "Web Development – Udemy",
    "WebRTC & Socket.io – Udemy",
    "AWS Cloud Foundations",
    "Full Stack Development",
    "Generative AI – Udemy"
  ];

  return (
    <section id="certifications">
      <h2>Certifications</h2>

      <div className="card-grid">
        {certs.map((cert, index) => (
          <div key={index} className="info-card">
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}