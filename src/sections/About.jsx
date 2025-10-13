import React from 'react'
import './About.css'
import SplitText from '../components/SplitText'
// Importar imágenes de tecnologías
import javascriptIcon from '../assets/tech/javascript.svg'
import typescriptIcon from '../assets/tech/typescript.svg'
import pythonIcon from '../assets/tech/python.svg'
import dartIcon from '../assets/tech/dart.svg'
import kotlinIcon from '../assets/tech/kotlin.svg'
import swiftIcon from '/images/tech/swift.svg'
import reactIcon from '../assets/tech/react.svg'
import nodejsIcon from '../assets/tech/nodedotjs.svg'
import mongodbIcon from '../assets/tech/mongodb.svg'
import githubIcon from '../assets/tech/github.svg'
import androidstudioIcon from '../assets/tech/androidstudio.svg'
import xcodeIcon from '/images/tech/xcode.svg'
import vscodeIcon from '/images/tech/VSCode.svg'

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
    { 
      name: 'Swift', 
      image: swiftIcon,
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
      category: 'Database',
      featured: true
    },
    // Herramientas principales
    { 
      name: 'GitHub', 
      image: githubIcon,
      category: 'Git',
      featured: true
    },
    { 
      name: 'Android Studio', 
      image: androidstudioIcon,
      category: 'IDE',
      featured: true
    },
    { 
      name: 'Xcode', 
      image: xcodeIcon,
      category: 'IDE',
      featured: true
    },
    { 
      name: 'VSCode', 
      image: vscodeIcon,
      category: 'IDE',
      featured: true
    }
  ]

  // Todas las tecnologías están en el stack principal ahora
  const mainTechnologies = technologies.filter(tech => tech.featured)

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">
          <SplitText delay={0.2}>Sobre mí</SplitText>
        </h2>
        <p className="section-subtitle about-subtitle">
          <SplitText delay={0.3}>Desarrollador especializado en JavaScript, Python, Swift y desarrollo móvil</SplitText>
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Soy un desarrollador de software apasionado por crear aplicaciones web y móviles modernas. 
              Me especializo en JavaScript, TypeScript, Python, Dart, Kotlin y Swift.
              Mi stack principal incluye React para frontend, Node.js para backend y MongoDB como base de datos.
              Tengo experiencia en desarrollo móvil con Android Studio, Flutter y desarrollo iOS con Swift.
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
