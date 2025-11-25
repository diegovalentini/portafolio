import { useEffect, useRef, useState } from "react";
import copyIcon from "./assets/copy-solid-full.svg";
import githubIcon from "./assets/github-brands-solid-full.svg";

const SECTIONS = [
  { id: "inicio", label: "INICIO" },
  { id: "sobre-mi", label: "SOBRE MÍ" },
  { id: "portfolio", label: "PORTFOLIO" },
  { id: "educacion", label: "EDUCACIÓN" },
  { id: "skills", label: "SKILLS" },
];
const PROJECTS = [
  {
    id: "estacionamiento-azul",
    title: "Estacionamiento Azul",
    description:
      "App móvil para gestionar plazas de parking, tiempos y ocupación en tiempo real.",
    image: "https://via.placeholder.com/480x270?text=Estacionamiento+Azul",
    tags: ["Flutter", "Firebase", "Mobile"],
    github: "https://github.com/tu-usuario/estacionamiento-azul",
    demo: "#", // más adelante pones el link real
  },
  {
    id: "parking-test",
    title: "Parking Test",
    description:
      "Versión de pruebas del sistema de parking con nuevas features y UI experimental.",
    image: "https://via.placeholder.com/480x270?text=Parking+Test",
    tags: ["Flutter", "Firestore"],
    github: "https://github.com/tu-usuario/parking-test",
    demo: "#",
  },
  {
    id: "portfolio-web",
    title: "Portfolio Web",
    description:
      "Este mismo portfolio, construido con React y Vite, con estilo neon y sidebar fija.",
    image: "https://via.placeholder.com/480x270?text=Portfolio+Web",
    tags: ["React", "Vite", "HTML", "CSS"],
    github: "https://github.com/tu-usuario/portfolio-web",
    demo: "#",
  },
];

function App() {
  const email = "diego_valentini16@hotmail.com";

  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const sectionRefs = useRef({});

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (error) {
      console.error("No se pudo copiar el email", error);
    }
  };

  const handleNavClick = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Observa qué sección está en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    SECTIONS.forEach((section) => {
      const el = sectionRefs.current[section.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      {/* SIDEBAR IZQUIERDA */}
      <aside className="sidebar">
        <div className="avatar">
          <span>DV</span>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {SECTIONS.map((section) => (
              <li
                key={section.id}
                className={activeSection === section.id ? "active" : ""}
                onClick={() => handleNavClick(section.id)}
              >
                {section.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* CONTENIDO DERECHA */}
      <main className="main">
        {/* INICIO */}
        <section
          id="inicio"
          ref={(el) => (sectionRefs.current["inicio"] = el)}
          className="section hero"
        >
          <p className="subtitle">EN LA RUTA DE SER UN DESARROLLADOR</p>

          <h1 className="hero-title">
            <span className="name-first">DIEGO</span>{" "}
            <span className="name-last">VALENTINI</span>
          </h1>

          <p className="hero-description">
            BIENVENIDOS A MI PORTAFOLIO COMO DESARROLLADOR TRAINEE.
          </p>

          <p className="hero-text hero-text-email">
            Si quieres ponerte en contacto conmigo escríbeme a{" "}
            <a href={`mailto:${email}`} className="hero-link">
              {email}
            </a>
            <button
              type="button"
              className="copy-email-btn"
              onClick={handleCopyEmail}
            >
              <img src={copyIcon} alt="copiar" className="copy-icon" />
            </button>
            {copied && (
              <span className="copy-email-feedback">¡Copiado!</span>
            )}
          </p>

          <button className="primary-button">Descarga mi CV</button>

          <div className="socials">
            <a href="#" className="social-circle">
              in
            </a>
            <a href="#" className="social-circle">
              <img src={githubIcon} className="git-icon"
              />
            </a>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section
          id="sobre-mi"
          ref={(el) => (sectionRefs.current["sobre-mi"] = el)}
          className="section"
        >
          <h2 className="section-title">Sobre mí</h2>
          <p className="section-text">
            Soy un desarrollador apasionado por la tecnología, con un enfoque constante en aprender,
            mejorar y crear soluciones digitales eficientes. Me motiva transformar ideas en productos funcionales
            y aportar valor real mediante el uso de conocimientos prácticos en desarrollo de software.
            </p>
            <p className="section-text2">
           Aunque no cuento con estudios formales ni certificaciones en desarrollo, llevo más de dos años aprendiendo de forma autodidacta, creando sitios web y desarrollando aplicaciones. A lo largo de este camino siempre he sido capaz de resolver los problemas que se presentan, y considero que mi mayor fortaleza es precisamente esa: la capacidad de encontrar soluciones y enfrentar cualquier desafío técnico con determinación.
          </p>
        </section>

        {/* PORTFOLIO */}
        <section
            id="portfolio"
            ref={(el) => (sectionRefs.current["portfolio"] = el)}
            className="section"
              >
            <h2 className="section-title">Portfolio</h2>

            <div className="portfolio-grid">
              {PROJECTS.map((project) => (
                <article className="project-card" key={project.id}>
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>
              
                  <div className="project-body">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
              
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="project-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link-circle"
                        >
                          GH
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link-circle"
                        >
                          ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        {/* EDUCACION */}
        <section
          id="educacion"
          ref={(el) => (sectionRefs.current["educacion"] = el)}
          className="section">
          <h2 className="section-title">Educación</h2>
          <p className="section-text">
            Cursos, bootcamps, autodidacta, YouTube, Udemy, etc.
          </p>
        </section>
        {/* SKILLS */}
        <section
          id="skills"
          ref={(el) => (sectionRefs.current["skills"] = el)}
          className="section"
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-text">
            Tecnologías que manejas: Flutter, Dart, React, Firebase, etc.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
