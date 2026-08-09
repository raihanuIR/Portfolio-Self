"use client";

export default function Timeline() {
  const experiences = [
    {
      role: "Associate Full Stack Developer",
      company: "Apex Digital Solutions",
      duration: "2024 - Present",
      description: "Spearheaded frontend migration from legacy templates to Next.js, resulting in a 40% improvement in PageSpeed performance. Collaborated on REST API designs and SQL query optimizations.",
    },
    {
      role: "Junior Software Engineer",
      company: "Innovate Tech Labs",
      duration: "2023 - 2024",
      description: "Implemented reactive search UI pages using React.js. Wrote and maintained comprehensive integration tests using Jest. Resolved over 150 customer-reported bugs.",
    },
  ];

  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Metropolitan University of Technology",
      duration: "2020 - 2024",
      description: "Focused on advanced web engineering, database management systems, and algorithms. Completed thesis project on collaborative editing systems. Graduated with Honors.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka College",
      duration: "2018 - 2020",
      description: "Science Group. Excelled in Mathematics, Physics, and ICT. Achieved GPA 5.0/5.0.",
    },
  ];

  return (
    <section id="timeline" className="timeline-section">
      <div className="glow-orb glow-orb-teal" style={{ top: "30%", right: "15%" }}></div>

      <div className="section-header">
        <h2 className="section-title">My Qualifications</h2>
        <p className="section-subtitle">
          A brief overview of my educational background and professional work experience in the tech sector.
        </p>
      </div>

      <div className="grid-2 timeline-split-grid">
        {/* Experience Column */}
        <div className="timeline-column">
          <h3 className="timeline-column-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="column-icon text-teal">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Professional Experience
          </h3>
          <div className="timeline-flow">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item glass-card">
                <div className="timeline-dot dot-teal"></div>
                <div className="timeline-badge-date">{exp.duration}</div>
                <h4 className="timeline-item-title">{exp.role}</h4>
                <p className="timeline-item-subtitle">{exp.company}</p>
                <p className="timeline-item-desc">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="timeline-column">
          <h3 className="timeline-column-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="column-icon text-purple">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
            Education History
          </h3>
          <div className="timeline-flow">
            {education.map((edu, idx) => (
              <div key={idx} className="timeline-item glass-card">
                <div className="timeline-dot dot-purple"></div>
                <div className="timeline-badge-date">{edu.duration}</div>
                <h4 className="timeline-item-title">{edu.degree}</h4>
                <p className="timeline-item-subtitle">{edu.institution}</p>
                <p className="timeline-item-desc">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
