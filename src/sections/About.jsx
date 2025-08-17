import React from 'react'
import './About.css'

// Importar imágenes de tecnologías
import javascriptIcon from '../assets/tech/javascript.svg'
import typescriptIcon from '../assets/tech/typescript.svg'
import pythonIcon from '../assets/tech/python.svg'
import dartIcon from '../assets/tech/dart.svg'
import kotlinIcon from '../assets/tech/kotlin.svg'
import reactIcon from '../assets/tech/react.svg'
import nodejsIcon from '../assets/tech/nodedotjs.svg'
import mongodbIcon from '../assets/tech/mongodb.svg'
import githubIcon from '../assets/tech/github.svg'
import androidstudioIcon from '../assets/tech/androidstudio.svg'

const About = () => {
  const technologies = [
    // Lenguajes principales
    { 
      name: 'JavaScript', 
      image: javascriptIcon,
      category: 'Lenguaje',
      featured: true
    },
    { 
      name: 'TypeScript', 
      image: typescriptIcon,
      category: 'Lenguaje',
      featured: true
    },
    { 
      name: 'Python', 
      image: pythonIcon,
      category: 'Lenguaje',
      featured: true
    },
    { 
      name: 'Dart', 
      image: dartIcon,
      category: 'Lenguaje',
      featured: true
    },
    { 
      name: 'Kotlin', 
      image: kotlinIcon,
      category: 'Lenguaje',
      featured: true
    },
    // Frontend y Frameworks
    { 
      name: 'React', 
      image: reactIcon,
      category: 'Frontend',
      featured: true
    },
    // Backend
    { 
      name: 'Node.js', 
      image: nodejsIcon,
      category: 'Backend',
      featured: true
    },
    // Base de Datos
    { 
      name: 'MongoDB', 
      image: mongodbIcon,
      category: 'Base de Datos',
      featured: true
    },
    // Herramientas principales
    { 
      name: 'GitHub', 
      image: githubIcon,
      category: 'Control de Versiones',
      featured: true
    },
    { 
      name: 'Android Studio', 
      image: androidstudioIcon,
      category: 'Desarrollo Móvil',
      featured: true
    }
  ]

  // Todas las tecnologías están en el stack principal ahora
  const mainTechnologies = technologies.filter(tech => tech.featured)
  const tools = [] // Sin herramientas separadas

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>
        <p className="section-subtitle">
          Desarrollador Full Stack especializado en JavaScript, Python y desarrollo móvil
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Soy un desarrollador de software apasionado por crear aplicaciones web y móviles 
              modernas. Mi stack principal incluye JavaScript/TypeScript para desarrollo web, 
              Python para backend y scripting, y Dart/Flutter para aplicaciones móviles.
            </p>
            <p>
              Me especializo en React para frontend, Node.js para backend, y MongoDB como 
              base de datos principal. También tengo experiencia en desarrollo móvil con 
              Android Studio y Flutter, lo que me permite crear soluciones completas.
            </p>
            <p>
              Mi enfoque está en escribir código limpio, escalable y eficiente. Disfruto 
              aprendiendo nuevas tecnologías y manteniéndome al día con las mejores 
              prácticas del desarrollo moderno.
            </p>
          </div>
          
          <div className="technologies">
            <div className="main-technologies">
              <h3>Stack de Tecnologías</h3>
              <div className="tech-grid main-grid">
                {mainTechnologies.map((tech) => (
                  <div key={tech.name} className="tech-item main-tech">
                    <div className="tech-image">
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        onLoad={() => console.log(`✅ Imagen cargada: ${tech.name}`)}
                        onError={(e) => {
                          console.error(`❌ Error cargando imagen: ${tech.name}`, e.target.src);
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="tech-placeholder" style={{display: 'none'}}>
                        {tech.name.charAt(0)}
                      </div>
                    </div>
                    <div className="tech-info">
                      <span className="tech-name">{tech.name}</span>
                      <span className="tech-category">{tech.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
