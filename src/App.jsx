import { useEffect, useRef, useState } from "react";
import copyIcon from "./assets/copy-solid-full.svg";
import githubIcon from "./assets/github-brands-solid-full.svg";
import Eazul from "./assets/Eazul.png";
import pkweb from "./assets/pkweb.png";
import warrunning from "./assets/warrunning.png";
import cvdiego from "./assets/CVDIEGOV2025.pdf";
import avatar from "./assets/avatar.png";
import htmlIcon from "./assets/icons/html5.png";
import cssIcon from "./assets/icons/css.png";
import jsIcon from "./assets/icons/js.svg";
import flutterIcon from "./assets/icons/flutter.svg";
import dartIcon from "./assets/icons/dart.svg";
import firebaseIcon from "./assets/icons/firebase.svg";
import mobileIcon from "./assets/icons/mobile.svg";
import linkIcon from "./assets/link.svg";
import figmaIcon from "./assets/icons/Figma.svg";
import reactIcon from "./assets/icons/react.svg";
import vscIcon from "./assets/icons/vsc.svg";

const SECTIONS = [
  { id: "inicio", key: "inicio" },
  { id: "sobre-mi", key: "sobreMi" },
  { id: "portfolio", key: "portfolio" },
  { id: "skills", key: "skills" },
];

const PROJECTS = [
  {
    id: "estacionamiento-azul",
    title: "Estacionamiento Azul",
    description:
      "App web para gestionar plazas de parking, tiempos y ocupación en tiempo real, adaptada para móviles.",
    image: Eazul,
    tags: ["flutter", "dart", "firebase", "mobile"],
  },
  {
    id: "parking-test",
    title: "Parking Web",
    description:
      "Versión web de Estacionamiento Azul, adaptada para móviles y con algunos cambios en la interfaz.",
    image: pkweb,
    tags: ["html", "firebase", "css", "javascript"],
    github: "https://github.com/diegovalentini/parking-web",
    demo: "https://parking-azul.web.app/index.html",
  },
  {
    id: "War-Running",
    title: "WarRunning",
    description:
      "App de running donde conquistas zonas al completar recorridos. Actualmente en desarrollo.",
    image: warrunning,
    tags: ["flutter", "dart", "firebase"],
  },
];

const TECH_META = {
  html:     { label: "HTML5",      className: "tech-html",     icon: htmlIcon },
  css:      { label: "CSS3",       className: "tech-css",      icon: cssIcon },
  javascript: { label: "JavaScript", className: "tech-js",     icon: jsIcon },
  react:    { label: "React",      className: "tech-react" },
  flutter:  { label: "Flutter",    className: "tech-flutter",  icon: flutterIcon },
  dart:     { label: "Dart",       className: "tech-dart",     icon: dartIcon },
  firebase: { label: "Firebase",   className: "tech-firebase", icon: firebaseIcon },
  mobile:   { label: "Mobile",     className: "tech-mobile" , icon: mobileIcon },  
  };


const TEXTS = {
  es: {
    menu: {
      inicio: "INICIO",
      sobreMi: "SOBRE MÍ",
      portfolio: "PORTFOLIO",
      skills: "SKILLS",
    },
    heroDescription:
      "BIENVENIDOS A MI PORTAFOLIO COMO DESARROLLADOR TRAINEE.",
    contactPrefix:
      "Si quieres ponerte en contacto conmigo escríbeme a",
    cvButton: "Descarga mi CV",
    sections: {
      sobreMiTitle: "Sobre mí",
      sobreMiP1:
        "Soy un desarrollador apasionado por la tecnología, con un enfoque constante en aprender, mejorar y crear soluciones digitales eficientes. Me motiva transformar ideas en productos funcionales y aportar valor real mediante el uso de conocimientos prácticos en desarrollo de software.",
      sobreMiP2:
        "Aunque no cuento con estudios formales ni certificaciones en desarrollo, llevo más de dos años aprendiendo de forma autodidacta, creando sitios web y desarrollando aplicaciones. A lo largo de este camino siempre he sido capaz de resolver los problemas que se presentan, y considero que mi mayor fortaleza es precisamente esa: la capacidad de encontrar soluciones y enfrentar cualquier desafío técnico con determinación.",
      portfolioTitle: "Portfolio",
      skillsTitle: "Skills",
      skillsP:
        "Tecnologías que manejo: Flutter, Dart, React, Firebase, HTML, CSS, JavaScript, etc.",
    },
  },
  en: {
    menu: {
      inicio: "HOME",
      sobreMi: "ABOUT ME",
      portfolio: "PORTFOLIO",
      skills: "SKILLS",
    },
    heroDescription:
      "WELCOME TO MY PORTFOLIO AS A TRAINEE DEVELOPER.",
    contactPrefix:
      "If you want to get in touch, email me at",
    cvButton: "Download my CV",
    sections: {
      sobreMiTitle: "About me",
      sobreMiP1:
        "I'm a developer passionate about technology, always focused on learning, improving and building efficient digital solutions. I enjoy turning ideas into functional products and bringing real value through hands-on software development.",
      sobreMiP2:
        "Even though I don't have formal studies or certificates in development, I've been learning on my own for more than two years, building websites and apps. Along this path I've always managed to solve the problems that appear, and I consider my biggest strength to be exactly that: the ability to find solutions and face any technical challenge with determination.",
      portfolioTitle: "Portfolio",
      skillsTitle: "Skills",
      skillsP:
        "Technologies I work with: Flutter, Dart, React, Firebase, HTML, CSS, JavaScript, etc.",
    },
  },
};

function App() {
  const email = "diego_valentini16@hotmail.com";

  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [lang, setLang] = useState("es");

  const t = TEXTS[lang];

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

  if (id === "inicio") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (el) {
    // Offset distinto para que PORTFOLIO quede mejor encuadrado
    const baseOffset = 80;
    const portfolioOffset = 40;

    const offset = id === "portfolio" ? portfolioOffset : baseOffset;

    const y = el.offsetTop - offset;
    window.scrollTo({
      top: y < 0 ? 0 : y,
      behavior: "smooth",
    });
  }
};

  // Efecto de máquina de escribir en bucle, dependiente del idioma
  useEffect(() => {
    const element = document.getElementById("typing-text");
    if (!element) return;

    const phrasesByLang = {
      es: [
        "EN LA RUTA DE SER UN DESARROLLADOR",
        "EN LA RUTA DE SER UN PROGRAMADOR",
        "EN LA RUTA DE SER UN APRENDIZ",
        "EN LA RUTA DE SER UN FREELANCER",
      ],
      en: [
        "ON THE WAY TO BECOME A DEVELOPER",
        "ON THE WAY TO BECOME A PROGRAMMER",
        "ON THE WAY TO BECOME A LEARNER",
        "ON THE WAY TO BECOME A FREELANCER",
      ],
    };

    const phrases = phrasesByLang[lang] || phrasesByLang.es;

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const type = () => {
      const current = phrases[phraseIndex];

      if (!deleting) {
        charIndex++;
        element.textContent = current.slice(0, charIndex);

        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(type, 1200);
          return;
        }
      } else {
        charIndex--;
        element.textContent = current.slice(0, charIndex);

        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timeoutId = setTimeout(type, 500);
          return;
        }
      }

      timeoutId = setTimeout(type, deleting ? 50 : 80);
    };

    type();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lang]);

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
          <img src={avatar} alt="avatar" className="avatar-img" />
        </div>

        <nav className="sidebar-nav">
          <ul>
            {SECTIONS.map((section) => (
              <li
                key={section.id}
                className={activeSection === section.id ? "active" : ""}
                onClick={() => handleNavClick(section.id)}
              >
                {t.menu[section.key]}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* CONTENIDO DERECHA */}
      <main className="main">
        {/* Selector de idioma arriba a la derecha */}
        <div className="lang-switch">
          <button
            className={lang === "es" ? "lang-btn active" : "lang-btn"}
            onClick={() => setLang("es")}
          >
            ES
          </button>
          <button
            className={lang === "en" ? "lang-btn active" : "lang-btn"}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>

        {/* INICIO */}
        <section
          id="inicio"
          ref={(el) => (sectionRefs.current["inicio"] = el)}
          className="section hero"
        >
          <p className="subtitle typing" id="typing-text"></p>

          <h1 className="hero-title">
            <span className="name-first">DIEGO</span>{" "}
            <span className="name-last">VALENTINI</span>
          </h1>

          <p className="hero-description">{t.heroDescription}</p>

          <p className="hero-text hero-text-email">
            {t.contactPrefix}{" "}
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

          <a
            href={cvdiego}
            download="cvDIEGOVALENTINI.pdf"
            className="primary-button"
          >
            {t.cvButton}
          </a>

          <div className="socials">
            <a
              href="https://www.linkedin.com/in/diegovalentini"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle"
            >
              IN
            </a>
            <a
              href="https://github.com/diegovalentini"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle"
            >
              <img src={githubIcon} className="git-icon" alt="GitHub" />
            </a>
          </div>
        </section>
        <div className="section-divider"></div>

        {/* SOBRE MÍ */}
        <section
          id="sobre-mi"
          ref={(el) => (sectionRefs.current["sobre-mi"] = el)}
          className="section"
        >
          <h2 className="section-title">{t.sections.sobreMiTitle}</h2>
          <p className="section-text">{t.sections.sobreMiP1}</p>
          <p className="section-text2">{t.sections.sobreMiP2}</p>
        </section>
        <div className="section-divider"></div>

        {/* PORTFOLIO */}
        <section
          id="portfolio"
          ref={(el) => (sectionRefs.current["portfolio"] = el)}
          className="section"
        >
          <h2 className="section-title">{t.sections.portfolioTitle}</h2>

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
                  <p className="project-description">
                    {project.description}
                  </p>

                <div className="project-tags">
                      {project.tags.map((tag) => {
                        const meta = TECH_META[tag] || { label: tag, className: "" };
                        return (
                          <span
                            className={`project-tag ${meta.className}`}
                            key={tag}
                          >
                            {meta.icon && (
                              <img
                                src={meta.icon}
                                alt={meta.label}
                                className="tag-icon"
                              />
                            )}
                            <span>{meta.label}</span>
                          </span>
                        );
                      })}
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
                       <img src={linkIcon} alt="Link" className="project-link-icon" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <div className="section-divider"></div>

        {/* SKILLS */}
        <section
          id="skills"
          ref={(el) => (sectionRefs.current["skills"] = el)}
          className="section"
        >
          <h2 className="section-title">Skills</h2>

          {/* Lenguajes de programación */}
          <div className="skills-group">
            <h3 className="skills-subtitle">Lenguajes de programación</h3>
            <div className="skills-badges">
              <span className="skill-badge tech-js"><img src={jsIcon} className="skill-icon"/>JavaScript</span>
              <span className="skill-badge tech-html"><img src={htmlIcon} className="skill-icon"/>HTML5</span>
              <span className="skill-badge tech-css"><img src={cssIcon} className="skill-icon"/>CSS3</span>
              <span className="skill-badge tech-dart"><img src={dartIcon} className="skill-icon"/>Dart</span>
            </div>
          </div>

          {/* Frameworks y librerías */}
          <div className="skills-group">
            <h3 className="skills-subtitle">Frameworks y librerías</h3>
            <div className="skills-badges">
              <span className="skill-badge tech-react"><img src={reactIcon} className="skill-icon"/>React</span>
              <span className="skill-badge tech-flutter"><img src={flutterIcon} className="skill-icon"/>Flutter</span>
            </div>
          </div>

          {/* Software y herramientas */}
          <div className="skills-group">
            <h3 className="skills-subtitle">Software y herramientas</h3>
            <div className="skills-badges">
              <span className="skill-badge tech-firebase"><img src={firebaseIcon} className="skill-icon"/>Firebase</span>
              <span className="skill-badge skill-tool"><img src={githubIcon} className="skill-icon"/>Git &amp; GitHub</span>
              <span className="skill-badge skill-tool"><img src={vscIcon} className="skill-icon"/>VS Code</span>
              <span className="skill-badge skill-tool"><img src={figmaIcon} className="skill-icon"/>Figma</span>
            </div>
          </div>

          {/* Estoy aprendiendo */}
          <div className="skills-group">
            <h3 className="skills-subtitle">Estoy aprendiendo</h3>
            <ul className="skills-learning-list">
              <li>Profundizar en React para front-end.</li>
              <li>Buenas prácticas con Firebase (auth, reglas, Firestore).</li>
              <li>Mejorar diseño de interfaces y UX.</li>
              <li>De a poco, Python.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
