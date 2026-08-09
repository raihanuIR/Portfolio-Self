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
      name: "SunCart - Summer Essentials Store",
      shortDesc: "A modern summer essentials e-commerce application featuring secure credentials & Google OAuth authentication, and dynamic database syncing.",
      description: "SunCart is a premium e-commerce platform built with Next.js (App Router) to browse and manage summer items. It leverages Tailwind CSS v4 and DaisyUI v5 for high-fidelity styling. User credentials are secured using Better-Auth (credentials & Google OAuth), and MongoDB Atlas serves as the persistence engine.",
      challenges: "Integrating session adapters (Better-Auth) within Next.js Server Components while maintaining fast, static-optimized load speeds. We resolved this by creating optimized adapter helpers, managing token session caches, and fine-tuning MongoDB connection pooling to prevent serverless function timeouts.",
      improvements: "Integrate Stripe payment gateways, implement shopping cart slide-drawers with local storage synchronization, and build an admin dashboard panel for direct catalog inventory control.",
      tech: ["Next.js", "Tailwind CSS", "Better-Auth", "MongoDB", "TypeScript"],
      image: "/project2_suncart.png",
      gitLink: "https://github.com/raihanuIR/SunCart",
      liveLink: "https://sun-cart-eta.vercel.app/",
    },
    {
      id: 3,
      name: "RaihanShop - Full-Stack E-Commerce & Dashboard",
      shortDesc: "A modern e-commerce platform split into a static React/Vite storefront and a serverless Next.js API backend using Prisma ORM.",
      description: "RaihanShop is a full-stack e-commerce system featuring a responsive storefront and an analytical admin dashboard. The application is divided into a fast static React/Vite frontend (supporting product filters, shopping cart, light/dark modes) and a serverless Next.js API backend using Prisma ORM to connect to SQLite/Turso database instances.",
      challenges: "Resolving Cross-Origin Resource Sharing (CORS) credentials and managing secure JWT session synchronization across different deployment subdomains (GitHub Pages and Vercel). We solved this by implementing dynamic HTTP CORS headers configuration inside Next.js middleware handlers, supporting cookie credentials sharing, and writing custom Axios interceptor error handshakes.",
      improvements: "Support native Webhook notification subscriptions for instant order notifications, integrate payment gateways (Stripe/SSLCommerz), and implement image upload hosting services (Cloudinary) for product catalogs.",
      tech: ["React", "Vite", "Next.js", "Prisma ORM", "Turso", "Recharts"],
      image: "/project3_raihanshop.png",
      gitLink: "https://github.com/raihanuIR/Raihan---Shop",
      liveLink: "https://raihanuir.github.io/Raihan---Shop/",
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
