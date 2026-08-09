"use client";

export default function Skills() {
  const frontendSkills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Tailwind CSS", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Git & GitHub", level: 90 },
    { name: "Responsive Web Design", level: 95 },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="glow-orb glow-orb-purple" style={{ bottom: "10%", left: "5%" }}></div>

      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          My primary focus is on frontend development, building modern, responsive, and interactive user interfaces using modern web technologies.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid-wrapper">
        <div className="grid-2 skills-grid">
          {frontendSkills.map((skill, index) => (
            <div key={index} className="skill-card glass-card">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
