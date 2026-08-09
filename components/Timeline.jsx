"use client";

export default function Timeline() {
  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Bangladesh University of Business and Technology (BUBT)",
      duration: "2022 - Present (3rd Year, 2nd Semester)",
      description: "Acquiring strong fundamentals in Software Engineering, Algorithms, Database Systems, and Web Technologies. Actively focusing on modern frontend web design, responsive layouts, and React architectures.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Kurigram Govt. College",
      duration: "2019 - 2021",
      description: "Science Group. Completed core studies in Mathematics, Physics, Chemistry, and ICT. Graduated with an outstanding GPA of 4.92 / 5.00.",
    },
  ];

  return (
    <section id="timeline" className="timeline-section">
      <div className="glow-orb glow-orb-teal" style={{ top: "30%", left: "50%", transform: "translateX(-50%)" }}></div>

      <div className="section-header">
        <h2 className="section-title">Education History</h2>
        <p className="section-subtitle">
          My academic qualifications and ongoing learning journey in Computer Science and Engineering.
        </p>
      </div>

      <div className="timeline-centered-wrapper" style={{ maxWidth: "700px", margin: "0 auto" }}>
        <div className="timeline-column">
          <h3 className="timeline-column-title" style={{ justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="column-icon text-purple">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
            Academic Journey
          </h3>
          <div className="timeline-flow" style={{ borderLeftColor: "var(--border-glass)" }}>
            {education.map((edu, idx) => (
              <div key={idx} className="timeline-item glass-card">
                <div className="timeline-dot dot-purple"></div>
                <div className="timeline-badge-date">{edu.duration}</div>
                <h4 className="timeline-item-title">{edu.degree}</h4>
                <p className="timeline-item-subtitle" style={{ color: "var(--accent-secondary)" }}>{edu.institution}</p>
                <p className="timeline-item-desc">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
