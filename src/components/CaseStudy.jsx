export default function CaseStudy() {
  return (
    <section id="casestudy" className="case-section">
      <h2>Case Study: Homepage Conversion Optimization</h2>

      <div className="case-grid">

        <div className="case-card">
          <h3>Problem</h3>
          <p>
            Users were landing on the homepage but not signing up.
            Low conversion was caused by weak CTA visibility, unclear 
            value messaging, form friction, and mobile usability gaps.
          </p>
        </div>

        <div className="case-card">
          <h3>Approach</h3>
          <p>
            Conducted UX audit using analytics and heatmaps.
            Redesigned CTA hierarchy, simplified the signup form, 
            added sticky mobile CTA, improved microcopy, and optimized performance.
            Validated changes through A/B testing.
          </p>
        </div>

        <div className="case-card">
          <h3>Technical Highlights</h3>
          <ul>
            <li>Above-the-fold primary CTA</li>
            <li>Mid-page & sticky mobile CTA</li>
            <li>Progressive signup flow</li>
            <li>Performance improvements</li>
            <li>Event tracking + A/B testing</li>
          </ul>
        </div>

        <div className="case-card">
          <h3>Outcome</h3>
          <p>
            Improved CTA engagement, reduced form abandonment, and 
            increased overall homepage-to-signup conversion rate.
            Demonstrated product thinking backed by measurable UX improvements.
          </p>
        </div>

      </div>

      {/* FULL CASE STUDY BUTTON */}

      {/* <div className="case-cta">
        <a
          href="https://your-full-case-study-link.com"
          target="_blank"
          rel="noreferrer"
          className="case-btn"
        >
          View Full Case Study →
        </a>
      </div> */}

    </section>
  );
}