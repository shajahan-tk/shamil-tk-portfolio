import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  Braces,
  CheckCircle2,
  ChevronUp,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Globe2,
  Headphones,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Network,
  Phone,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const services = [
  {
    icon: <Headphones size={30} />,
    title: "IT Support",
    description:
      "Reliable end-user support, system troubleshooting, network support, device setup, and day-to-day IT operations.",
  },
  {
    icon: <Globe2 size={30} />,
    title: "Web Design",
    description:
      "Modern, responsive and professional websites focused on usability, performance and strong visual presentation.",
  },
  {
    icon: <Code2 size={30} />,
    title: "Software Development",
    description:
      "Practical business applications, internal tools and custom software built to improve productivity and workflows.",
  },
  {
    icon: <Bot size={30} />,
    title: "AI Implementation",
    description:
      "AI-powered automation, smart assistants, workflow optimization and practical integrations for real business needs.",
  },
];

const skills = [
  "IT Support & Troubleshooting",
  "Windows & End-User Support",
  "LAN / WAN / Networking",
  "System Administration",
  "React",
  "JavaScript",
  "HTML5 / CSS3",
  "REST API Integration",
  "Database & SQL",
  "Python Automation",
  "AI Tools & LLM Integration",
  "Workflow Automation",
];

const projects = [
  {
    category: "AI / Automation",
    title: "AI Business Assistant",
    description:
      "An intelligent assistant concept for automating repetitive office tasks, internal queries, document workflows and support activities.",
    tech: ["React", "AI API", "Automation"],
  },
  {
    category: "Web Development",
    title: "Corporate Business Website",
    description:
      "A responsive company website with premium visual design, service presentation, lead generation sections and mobile optimization.",
    tech: ["React", "CSS", "Responsive UI"],
  },
  {
    category: "Software",
    title: "Internal Operations System",
    description:
      "A business-focused software concept for tracking operational activities, staff records, workflow status and reporting.",
    tech: ["JavaScript", "Database", "Dashboard"],
  },
  {
    category: "IT Infrastructure",
    title: "IT Support & Network Setup",
    description:
      "Structured support for users, desktops, connectivity, access, shared resources, security basics and infrastructure reliability.",
    tech: ["Networking", "Windows", "Support"],
  },
];

const timeline = [
  {
    year: "Now",
    title: "IT & Digital Solutions",
    text: "Providing practical IT support while building modern web, software and AI-driven solutions.",
  },
  {
    year: "Focus",
    title: "Automation & AI",
    text: "Implementing smarter workflows that reduce repetitive work and improve response time and efficiency.",
  },
  {
    year: "Growth",
    title: "Full-Stack Capability",
    text: "Continuously expanding development, cloud, networking, database and software engineering skills.",
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" />

      <header className="header">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">S</span>
          <span>
            <strong>SHAMIL TK</strong>
            <small>IT & Digital Solutions</small>
          </span>
        </a>

        <nav className={open ? "nav open" : "nav"}>
          {["About", "Services", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's Talk
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={16} />
              Available for IT, Web & AI Projects
            </div>

            <p className="intro">Hello, I'm</p>
            <h1>
              SHAMIL <span>TK</span>
            </h1>
            <h2>
              IT Support <span>•</span> Web Design <span>•</span> Software Development <span>•</span> AI Implementation
            </h2>

            <p className="hero-text">
              I create reliable IT solutions, polished digital experiences and practical automation systems that help businesses work smarter, faster and more efficiently.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View My Work <ArrowRight size={18} />
              </a>
              <a className="btn secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>IT</strong>
                <span>Support & Infrastructure</span>
              </div>
              <div>
                <strong>WEB</strong>
                <span>Responsive Design</span>
              </div>
              <div>
                <strong>AI</strong>
                <span>Automation & Integration</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="profile-card">
              <div className="profile-top">
                <div className="avatar">ST</div>
                <div>
                  <p className="availability"><span /> Open to opportunities</p>
                  <h3>SHAMIL TK</h3>
                  <p>IT & Technology Professional</p>
                </div>
              </div>

              <div className="code-window">
                <div className="window-dots"><i /><i /><i /></div>
                <pre>{`const profile = {
  role: "IT Support",
  passion: "Technology",
  builds: ["Web", "Software", "AI"],
  mindset: "Solve. Improve. Automate."
};`}</pre>
              </div>

              <div className="tech-row">
                <span><Terminal size={17} /> Support</span>
                <span><Braces size={17} /> Dev</span>
                <span><Cpu size={17} /> AI</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-heading">
            <span>01 / ABOUT</span>
            <h2>Technology that solves real problems.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I’m <strong>SHAMIL TK</strong>, an IT professional focused on combining technical support, web technology, software development and AI to create reliable solutions for modern businesses.
              </p>
              <p>
                My approach is practical: understand the problem, simplify the workflow, select the right technology and build a solution that is easy to use and maintain.
              </p>

              <div className="check-grid">
                {[
                  "Fast troubleshooting",
                  "Business-focused solutions",
                  "Clean UI & responsive design",
                  "Automation-first mindset",
                  "Scalable implementation",
                  "Continuous learning",
                ].map((item) => (
                  <span key={item}><CheckCircle2 size={18} /> {item}</span>
                ))}
              </div>
            </div>

            <div className="about-panel">
              <div className="mini-card">
                <MonitorCog />
                <div><strong>Support</strong><span>Users, systems & devices</span></div>
              </div>
              <div className="mini-card">
                <Network />
                <div><strong>Infrastructure</strong><span>Network & connectivity</span></div>
              </div>
              <div className="mini-card">
                <Database />
                <div><strong>Data</strong><span>Databases & reporting</span></div>
              </div>
              <div className="mini-card">
                <Rocket />
                <div><strong>Innovation</strong><span>AI & automation</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <span>02 / SERVICES</span>
            <h2>What I can help you build.</h2>
          </div>

          <div className="service-grid">
            {services.map((service, i) => (
              <article className="service-card" key={service.title}>
                <div className="card-number">0{i + 1}</div>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact">Discuss a project <ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <span>03 / SKILLS</span>
            <h2>My technical toolkit.</h2>
          </div>

          <div className="skills-layout">
            <div className="skill-cloud">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>

            <div className="stack-card">
              <h3>Core Areas</h3>
              <div className="stack-line"><ServerCog /><div><b>IT Operations</b><small>Support, systems, infrastructure</small></div></div>
              <div className="stack-line"><Layers3 /><div><b>Frontend</b><small>React, JavaScript, modern UI</small></div></div>
              <div className="stack-line"><Database /><div><b>Backend & Data</b><small>APIs, SQL, business logic</small></div></div>
              <div className="stack-line"><Bot /><div><b>AI & Automation</b><small>LLMs, assistants, workflows</small></div></div>
              <div className="stack-line"><ShieldCheck /><div><b>Security Mindset</b><small>Safe access and reliable systems</small></div></div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading heading-row">
            <div>
              <span>04 / PROJECTS</span>
              <h2>Selected work & concepts.</h2>
            </div>
            <a href="#contact" className="text-link">Start a project <ArrowRight size={17} /></a>
          </div>

          <div className="project-grid">
            {projects.map((project, i) => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual visual-${i + 1}`}>
                  <div className="mock-window">
                    <div className="mock-top"><i /><i /><i /></div>
                    <div className="mock-body">
                      <div className="mock-side" />
                      <div className="mock-main">
                        <span />
                        <span />
                        <div className="mock-cards"><b /><b /><b /></div>
                        <em />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section journey">
          <div className="section-heading">
            <span>05 / JOURNEY</span>
            <h2>Building capability across IT and development.</h2>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.title}>
                <span className="timeline-year">{item.year}</span>
                <div className="timeline-dot" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-card">
            <div>
              <span className="section-kicker">LET'S WORK TOGETHER</span>
              <h2>Have an IT problem or a digital idea?</h2>
              <p>
                I’m interested in IT support roles, freelance development, web projects, automation and AI implementation opportunities.
              </p>
              <div className="contact-links">
                <a href="mailto:your@email.com"><Mail size={19} /> your@email.com</a>
                <a href="tel:+971000000000"><Phone size={19} /> +971 XX XXX XXXX</a>
                <span><MapPin size={19} /> United Arab Emirates</span>
              </div>
            </div>

            <div className="contact-action">
              <div className="contact-icon"><Mail size={34} /></div>
              <h3>Start a conversation</h3>
              <p>Tell me what you need and I’ll help identify the right technical solution.</p>
              <a className="btn primary" href="mailto:your@email.com">
                Send an Email <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">S</span>
          <div><strong>SHAMIL TK</strong><small>IT & Digital Solutions</small></div>
        </div>
        <p>Designed & built with React • © 2026 SHAMIL TK</p>
        <div className="socials">
          <a href="#" aria-label="LinkedIn"><Linkedin size={19} /></a>
          <a href="#" aria-label="GitHub"><Github size={19} /></a>
          <a href="#" aria-label="Website"><ExternalLink size={19} /></a>
        </div>
      </footer>

      {showTop && (
        <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ChevronUp />
        </button>
      )}
    </div>
  );
}

export default App;
