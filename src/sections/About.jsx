import React from 'react'
import './About.css'

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'MongoDB', level: 75 }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>
        <p className="section-subtitle">
          Desarrollador apasionado por crear soluciones tecnológicas innovadoras
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Soy un desarrollador de software con más de X años de experiencia en la creación
              de aplicaciones web modernas y escalables. Me especializo en tecnologías de 
              frontend y backend, con un enfoque particular en React y Node.js.
            </p>
            <p>
              Mi pasión por la tecnología me lleva a estar constantemente aprendiendo y 
              experimentando con nuevas herramientas y frameworks. Disfruto trabajando en 
              equipos colaborativos y enfrentando desafíos técnicos complejos.
            </p>
            <p>
              Cuando no estoy programando, me gusta contribuir a proyectos de código abierto,
              escribir sobre tecnología y mantenerme al día con las últimas tendencias del
              desarrollo web.
            </p>
          </div>
          
          <div className="skills">
            <h3>Habilidades técnicas</h3>
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
