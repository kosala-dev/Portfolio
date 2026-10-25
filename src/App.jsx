import healthcarePreview from "./assets/university-healthcare.png";
import airlinePreview from "./assets/Airline-System.png";
import eventsyncPreview from "./assets/eventsync.png"
import nudityChecker from "./assets/nudity-checker.png"
import FoodieDrop from "./assets/FoodieDrop.png"
import profilePhoto from "./assets/my.png"

const projects = [
  {
    title: "Re-EngineeringUniversity of Vavuniya Healthcare System",
    category: "Full-stack develop",
    description:
      "A modern web application built to streamline the operations of the University of Vavuniya Medical Center.",
    impact: "All-in-one digital platform for students, staff, and medical personnel to manage medical records, appointments, and inventory efficiently.",
    image: healthcarePreview,
    imageAlt: "University of Vavuniya healthcare system preview",
    progress: 85,
    next: "Next: Dockerising"
  },
  {
    title: "SriLanka Airline Mini Project",
    category: "OOP",
    description:
      "A Sri Lanka Airline Booking System This project is a Java-based airline booking system designed for Sri Lankan Airlines.",
    impact: "enables users to register, book flights, view rates, and manage their booking history. The program simulates a simplified airline booking experience with basic functionalities.",
    image: airlinePreview,
    imageAlt: "Sri Lanka Airline booking interface preview",
    progress: 100,
  },
    {
    title: "Eventsync Online Ticket Booking System",
    category: "Full-stack develop",
    description:
      "A full-stack event ticketing and automated QR verification platform built with React, Node.js, MySQL, and React Native.",
    impact: "Eliminates manual ticket processing by seamlessly connecting online PayHere checkouts with instant automated email delivery and mobile gate scanning.",
    image: eventsyncPreview,
    imageAlt: "Eventsync Online Ticket Booking interface preview",
    progress: 70,
    next: "Next: Domain Setup"
  },
    {
    title: "Nudity Checker System",
    category: "python develop",
    description:
      "A adult nudity checker system before upload on Social Media as a creator.",
    impact: "Eliminates being uploading videos that are not allowed on Social media platforms.",
    image: nudityChecker,
    imageAlt: "Nudity Checker preview",
    progress: 100,
  },  {
    title: "FoodieDrop",
    category: "Full-stack develop",
    description:
      "A full-stack food Store built with React, Node.js, MySQL, and React Native.",
    impact: "Enhanced Customer Experience by providing a seamless online ordering platform, allowing users to browse menus, place orders, and track deliveries in real-time.",
    image: FoodieDrop,
    imageAlt: "Foodie Drop preview",
    progress: 100,
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
  "UI/UX Design"
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
            <img
              src={profilePhoto}
              alt="Kosala Madushan Weerakkodi"
              className="profile-image"
            />
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
                <strong>Full Stack Systems & Network Engineer</strong>
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
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-image"
                />
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span>{project.impact}</span>
                  <div className="project-progress">
                    <div className="project-progress-heading">
                      <span>Progress</span>
                      <strong>{project.progress}%</strong>
                    </div>
                    <div
                      className="project-progress-track"
                      role="progressbar"
                      aria-label={`${project.title} progress`}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow={project.progress}
                    >
                      <div
                        className="project-progress-fill"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  {project.next && (
                    <p className="project-next">{project.next}</p>
                  )}
                </div>
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
