"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      name: "BBuddy - Mobile Inventory & Shop Management",
      shortDesc: "A high-performance React Native mobile app for inventory control, POS billing, and real-time business reports, built with Expo and TypeScript.",
      description: "BBuddy is a streamlined mobile platform designed for unified inventory control, POS invoicing, and business analytics. It features specialized multi-store configurations tailored for general retail, pharmacies, and fashion shops. Built with React Native, Expo, and TypeScript, it delivers native safe-boundary rendering, clean safe area navigations, and automated stock indicators.",
      challenges: "Ensuring smooth rendering of large inventory catalogs and maintaining fast invoice PDF calculations on low-end mobile hardware. We resolved this by leveraging FlatList rendering optimizations, lazy loading catalog screens, and separating invoice PDF generation loops from the main navigation UI states.",
      improvements: "Support local SQLite offline database syncing, integrate mobile camera barcode/QR scanning APIs, and support Bluetooth thermal printer printing for instant customer physical bills.",
      tech: ["React Native", "Expo", "TypeScript", "React Navigation"],
      image: "/project1_bbuddy.png",
      gitLink: "https://github.com/raihanuIR/BBUDDY",
      liveLink: "",
    },
    {
      id: 2,
      name: "HexaTrade - Real-Time Crypto Tracker",
      shortDesc: "A cryptocurrency tracking workspace showing live candlestick charts, asset metrics, and automated threshold alerts.",
      description: "HexaTrade connects to public cryptocurrency exchange API feeds to serve real-time price tick updates. Users can create personal portfolios, log transaction ledgers, set custom target-price notifications, and analyze candle trends.",
      challenges: "Synchronizing high-frequency WebSocket streams across several coin detail panels created cascading re-render bottlenecks. We solved this by centralizing raw WebSocket connections in a custom React context and using a pub-sub model to update charts directly without triggers to parent page states.",
      improvements: "Support direct wallet connection (Web3 wallets like MetaMask), add multi-language support, and introduce virtual paper trading simulations.",
      tech: ["Next.js", "WebSockets", "CSS Modules", "Express", "PostgreSQL", "Redis"],
      image: "/project2.png",
      gitLink: "https://github.com/raihanulislam/hexatrade-client",
      liveLink: "https://hexatrade.example.com",
    },
    {
      id: 3,
      name: "SyncSpace - Collaborative Canvas",
      shortDesc: "A collaborative drawing canvas supporting vector annotations, wireframes, and user cursors syncing.",
      description: "SyncSpace allows multiple team members to connect to shared rooms and draw vector shapes, sketch wireframes, post notes, and collaborate in real-time. Live cursors with username tags provide a highly collaborative workspace feel.",
      challenges: "Resolving overlapping modifications when two users edited the same canvas element at the exact same moment. We solved this issue by implementing Conflict-free Replicated Data Types (CRDTs) to sync drawing vectors, and applying Operational Transformations for shape manipulation logic.",
      improvements: "Add canvas versioning and history rollback states, support PNG/SVG downloads, and introduce integrated audio chat rooms.",
      tech: ["HTML5 Canvas", "Next.js", "Socket.io", "Node.js", "Express", "Redis"],
      image: "/project3.png",
      gitLink: "https://github.com/raihanulislam/syncspace-client",
      liveLink: "https://syncspace.example.com",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="glow-orb glow-orb-purple" style={{ top: "40%", left: "5%" }}></div>

      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here is a selection of my latest full-stack developments, detailing the tech stacks, challenges, and live demos.
        </p>
      </div>

      {/* Grid */}
      <div className="grid-3 projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card glass-card">
            <div className="project-image-wrapper">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={220}
                className="project-image"
              />
            </div>
            <div className="project-body">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.shortDesc}</p>
              <div className="project-tags">
                {project.tech.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="project-tag-pill">{t}</span>
                ))}
                {project.tech.length > 3 && (
                  <span className="project-tag-pill">+{project.tech.length - 3} more</span>
                )}
              </div>
              <button
                className="btn btn-secondary btn-full-width project-details-btn"
                onClick={() => setSelectedProject(project)}
              >
                View Details
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Render */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
