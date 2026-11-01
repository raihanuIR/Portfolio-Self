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
      name: "DailyVet AI - Veterinary Assistant & Farm Intelligence",
      shortDesc: "An AI veterinary assistant combined with NASA satellite data for heat-stress, forage and disease-outbreak alerts, built Bangla-first for livestock farmers.",
      description: "DailyVet is an AI and NASA-satellite powered farm intelligence suite built for livestock farmers in Bangladesh, created for the NASA Space Apps Challenge 2026. The core app offers an AI vet chat, feed advisor, breed detection, prescription scanning and pharma search. A climate suite adds species-specific heat-stress (THI) alerts, a forage rotation advisor, disease outbreak risk scoring, population impact mapping, and an interactive Leaflet risk map of all eight divisions. It is delivered in Bangla as a PWA.",
      challenges: "Turning raw public satellite data (NASA POWER, SEDAC) into advice farmers can act on. This meant converting temperature, humidity, rainfall and soil moisture into transparent risk scores with a clear breakdown, and presenting the results in Bangla with simple action checklists.",
      improvements: "Integrate more NASA datasets such as SMAP soil moisture and MODIS land surface temperature, and expand the community features that connect farmers with verified vets.",
      tech: ["AI Chat (Gemini/Groq)", "NASA POWER API", "Leaflet", "PWA", "JavaScript"],
      image: "/project2_dailyvet.svg",
      gitLink: "https://github.com/raihanuIR/Daily-vet-v4.0",
      liveLink: "",
    },
    {
      id: 3,
      name: "Haven Space (RentalHub) - Property Rental Platform",
      shortDesc: "A full-stack property rental and booking platform with Stripe payments, Firebase Google login, and role-based dashboards for tenants, owners and admins.",
      description: "Haven Space (RentalHub) is a property rental and leasing platform built with React 18, Vite and React Router. It includes a searchable listings grid, public property detail pages, JWT and Google (Firebase) authentication, Stripe-powered reservation deposits, and separate dashboards for tenants, owners and admins with Recharts analytics. It also has a reusable UI component library and a light/dark theme, and connects to a separate REST API backend.",
      challenges: "Designing three role-based dashboards (tenant, owner, admin) on one codebase with protected routes, and keeping a consistent design system through reusable components and design tokens across light and dark themes.",
      improvements: "Add real-time chat between tenants and owners, map-based property search, and automated email notifications for booking status changes.",
      tech: ["React", "Vite", "Stripe", "Firebase Auth", "Recharts", "Framer Motion"],
      image: "/project3_haven.png",
      gitLink: "https://github.com/raihanuIR/haven-space-client",
      liveLink: "https://haven-space-client.vercel.app/",
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
                sizes="(max-width: 968px) 100vw, 400px"
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
