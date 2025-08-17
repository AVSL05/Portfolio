import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, procesamiento de pagos y panel de administración.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas colaborativa con funcionalidades de tiempo real y notificaciones.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico con visualización de datos en tiempo real y pronósticos detallados.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Herramienta de análisis de redes sociales con métricas avanzadas y reportes automatizados.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Django', 'React', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Mis proyectos</h2>
        <p className="section-subtitle">
          Una selección de mis trabajos más destacados
        </p>
        
        {/* Proyectos destacados */}
        <div className="featured-projects">
          <h3 className="subsection-title">Proyectos destacados</h3>
          <div className="projects-grid featured">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card featured-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <span>Imagen del proyecto</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Ver proyecto
                      </a>
                      <a href={project.githubUrl} className="btn" target="_blank" rel="noopener noreferrer">
                        Código
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
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

        {/* Otros proyectos */}
        <div className="other-projects">
          <h3 className="subsection-title">Otros proyectos</h3>
          <div className="projects-grid">
            {otherProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.liveUrl} className="link" target="_blank" rel="noopener noreferrer">
                      Ver proyecto →
                    </a>
                    <a href={project.githubUrl} className="link" target="_blank" rel="noopener noreferrer">
                      Código →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
