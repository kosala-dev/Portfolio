const projects = [
  {
    title: "University of Vavuniya Healthcare System",
    category: "Full-stack develop",
    description:
      "A modern web application built to streamline the operations of the University of Vavuniya Medical Center.",
    impact: "All-in-one digital platform for students, staff, and medical personnel to manage medical records, appointments, and inventory efficiently.",
  },
  {
    title: "SriLanka Airline Mini Project ",
    category: "OOP",
    description:
      "A Sri Lanka Airline Booking System This project is a Java-based airline booking system designed for Sri Lankan Airlines.",
    impact: "enables users to register, book flights, view rates, and manage their booking history. The program simulates a simplified airline booking experience with basic functionalities.",
  }
];

const skills = [
  "React",
  "React Native",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "UI Engineering",
  "Design Systems",
  "REST APIs",
  "Responsive Design",
  "Performance",
  "Accessibility",
];

const stats = [
  { value: "3+", label: "Years building digital products" },
  { value: "100%", label: "Shipped client and personal projects" },
  { value: "100%", label: "Focus on clean UX and performance" },
];

export default function App() {
  return (
    <div className="page-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-orb orb-three" />
      <div className="background-mesh" />

      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <span>Hey, I'm Kosala Madushan Weerakkodi</span>
          </div>

          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Creative developer portfolio</p>
            <h1>
              I design and build digital experiences that feel sharp, modern,
              and memorable.
            </h1>
            <p className="hero-text">
              I&apos;m a React-focused developer crafting fast interfaces,
              expressive brand moments, and thoughtful product experiences for
              web-first teams.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore work
              </a>
              <a className="button button-secondary" href="#contact">
                Let&apos;s talk
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <p className="card-label">Currently</p>
            <h2>Building clean React products with bold visual direction.</h2>
            <p>
              Available for freelance collaborations, product design systems,
              and modern frontend builds.
            </p>

            <div className="mini-grid">
              <div>
                <span>Based in</span>
                <strong>Sri Lanka</strong>
              </div>
              <div>
                <span>Specialty</span>
                <strong>Full Stack Systems</strong>
              </div>
            </div>
          </aside>
        </section>
      </header>

      <main>
        <section className="stats">
          {stats.map((item) => (
            <article className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected projects</p>
            <h2>Work built with clarity, movement, and a strong point of view.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.impact}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Blending visual instinct with engineering discipline.</h2>
          </div>

          <div className="about-grid">
            <article className="about-card">
              <p>
                I care about interfaces that do more than function. They should
                communicate confidence, guide attention, and leave a lasting
                impression without getting in the user&apos;s way.
              </p>
              <p>
                My workflow combines product thinking, strong frontend
                architecture, and attention to detail from first concept to
                launch.
              </p>
            </article>

            <div className="skills-card">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-panel">
            <p className="eyebrow">Contact</p>
            <h2>Have a product, brand, or idea that needs a modern frontend?</h2>
            <p>
              Let&apos;s create something polished, high-performing, and distinctly
              yours.
            </p>

            <div className="contact-links">
              <a href="mailto:hello@example.com">kosalamadushan11976@gmail.com</a>
              <a href="https://github.com/kosala-dev" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kosala-madhushan-789242365/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
