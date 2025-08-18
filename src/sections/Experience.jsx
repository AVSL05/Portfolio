import React from 'react'
import './Experience.css'

const Experience = () => {
  const certifications = [
    {
      id: 1,
      category: 'Cloud Computing & AWS',
      institution: 'AWS Academy',
      period: '2024',
      description: 'Especialización en tecnologías cloud con certificaciones en fundamentos y operaciones de AWS. Conocimientos en infraestructura cloud y mejores prácticas.',
      technologies: ['AWS Cloud Foundations', 'AWS Cloud Operations', 'Cloud Infrastructure', 'Cloud Security']
    },
    {
      id: 2,
      category: 'Desarrollo de Software',
      institution: 'Oracle Academy & Cisco',
      period: '2024',
      description: 'Base sólida en programación con Python, Java y estructuras de datos. Certificaciones fundamentales para desarrollo de aplicaciones robustas.',
      technologies: ['Python Essentials', 'Java Fundamentals', 'Data Structures', 'Database Foundations']
    },
    {
      id: 3,
      category: 'Ciberseguridad & Redes',
      institution: 'LinkedIn Learning & Cisco',
      period: '2024',
      description: 'Conocimientos en seguridad de sistemas operativos y fundamentos de redes. Base esencial para desarrollo seguro y arquitectura de aplicaciones.',
      technologies: ['IT Security Foundations', 'Operating System Security', 'Networking Basics', 'Security Best Practices']
    },
    {
      id: 4,
      category: 'Data Science & Web Development',
      institution: 'IBM SkillsBuild & ArkusNexus',
      period: '2024',
      description: 'Formación especializada en ciencia de datos y desarrollo web moderno. Bootcamp intensivo y certificaciones en tecnologías web fundamentales.',
      technologies: ['Data Science Introduction', 'Web Development Fundamentals', 'Bootcamp Experience', 'Modern Web Technologies']
    }
  ]

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Certificaciones y Formación</h2>
        <p className="section-subtitle">
          Mi formación continua en tecnologías emergentes y desarrollo de software
        </p>
        
        <div className="timeline">
          {certifications.map((cert) => (
            <div key={cert.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content card">
                <div className="experience-header">
                  <h3 className="position">{cert.category}</h3>
                  <span className="period">{cert.period}</span>
                </div>
                <h4 className="company">{cert.institution}</h4>
                <p className="description">{cert.description}</p>
                <div className="technologies">
                  {cert.technologies.map((tech) => (
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
