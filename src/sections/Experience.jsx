import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Empresa Actual',
      position: 'Senior Full Stack Developer',
      period: '2022 - Presente',
      description: 'Desarrollo y mantenimiento de aplicaciones web escalables utilizando React, Node.js y MongoDB. Liderazgo técnico de un equipo de 5 desarrolladores.',
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS']
    },
    {
      id: 2,
      company: 'Empresa Anterior',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      description: 'Creación de interfaces de usuario responsive y accesibles. Implementación de mejores prácticas de desarrollo frontend y optimización de rendimiento.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Webpack', 'Jest']
    },
    {
      id: 3,
      company: 'Startup Tech',
      position: 'Junior Developer',
      period: '2019 - 2020',
      description: 'Desarrollo de aplicaciones web desde cero. Colaboración estrecha con el equipo de diseño para implementar interfaces de usuario intuitivas.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Express.js']
    }
  ]

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experiencia profesional</h2>
        <p className="section-subtitle">
          Mi trayectoria en el desarrollo de software
        </p>
        
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content card">
                <div className="experience-header">
                  <h3 className="position">{exp.position}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <h4 className="company">{exp.company}</h4>
                <p className="description">{exp.description}</p>
                <div className="technologies">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
