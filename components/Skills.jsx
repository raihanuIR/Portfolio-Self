"use client";

import { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillCategories = {
    frontend: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "TypeScript", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "GraphQL & REST APIs", level: 85 },
      { name: "Python", level: 70 },
    ],
    tools: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Vercel & Netlify", level: 85 },
      { name: "AWS (S3 / EC2)", level: 70 },
      { name: "Linux / Bash", level: 80 },
      { name: "CI / CD Pipelines", level: 70 },
    ],
  };

  const tabs = [
    { id: "frontend", label: "Frontend Development" },
    { id: "backend", label: "Backend Development" },
    { id: "tools", label: "Tools & DevOps" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="glow-orb glow-orb-purple" style={{ bottom: "10%", left: "5%" }}></div>

      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          My expertise spans across frontend design, backend systems, databases, cloud architecture, and development workflow tools.
        </p>
      </div>

      {/* Tabs */}
      <div className="skills-tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid-wrapper">
        <div className="grid-2 skills-grid">
          {skillCategories[activeTab].map((skill, index) => (
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
