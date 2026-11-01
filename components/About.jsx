export default function About() {
  const stats = [
    { value: "4+", label: "Years Coding" },
    { value: "5", label: "Projects Built" },
    { value: "∞", label: "Curiosity & Learning" },
    { value: "1,200+", label: "Cups of Coffee" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="glow-orb glow-orb-teal" style={{ top: "20%", left: "10%" }}></div>

      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          My background, how I got into web development, and what keeps me motivated outside of code.
        </p>
      </div>

      <div className="grid-2">
        {/* Left Column: Journey */}
        <div className="about-column glass-card p-large">
          <h3 className="column-title">My Coding Journey</h3>
          <p className="about-text">
            My programming journey started back in high school when I first created a basic HTML page. That simple &ldquo;Hello World&rdquo; screen sparked a curiosity that defined my career path. I went on to study Computer Science, where I fell in love with database structures, algorithm optimization, and web architectures.
          </p>
          <p className="about-text">
            Since then I have moved from basic scripts to building complete web applications, with my sweet spot in the frontend. I enjoy building things that live on the internet, and my goal is always to deliver polished, responsive interfaces backed by clean, modular code.
          </p>
          <p className="about-text font-italic">
            &ldquo;I write code not just to solve problems, but to build experiences that feel alive and intuitive.&rdquo;
          </p>
        </div>

        {/* Right Column: Work style & Hobbies */}
        <div className="about-column glass-card p-large">
          <h3 className="column-title">Work Philosophy & Hobbies</h3>
          <p className="about-text">
            I thrive in collaborative team environments, writing readable, self-documenting code. I have a deep appreciation for the power of clean styles, state management, and modern component systems. Building optimized Next.js pages and rendering responsive CSS layouts is what I look forward to every day.
          </p>
          <p className="about-text">
            Outside of software engineering, I enjoy creative and active outlets such as <strong>painting</strong>, which keeps my visual design eye sharp, <strong>sports</strong>, <strong>gaming</strong>, and <strong>coffee brewing</strong>.
          </p>

          <div className="hobbies-tags">
            <span className="hobby-tag">🎨 Painting</span>
            <span className="hobby-tag">⚽ Sports</span>
            <span className="hobby-tag">🎮 Gaming</span>
            <span className="hobby-tag">☕ Coffee Crafting</span>
            <span className="hobby-tag">✈️ Traveling</span>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="about-stats-container">
        <div className="grid-4 stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card glass-card">
              <h4 className="stat-value">{stat.value}</h4>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
