import React from 'react'
import './Projects.css'
import SplitText from '../components/SplitText'
import ShinyText from '../components/ShinyText'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Comercial',
      description: 'Sistema completo de gestión para tienda minorista especializada en ropa, calzado y accesorios. Incluye control de inventario, ventas, clientes y reportes en tiempo real.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'MongoDB', 'FastAPI', 'PyQt/Tkinter'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AVSL05/Gestion-tienda',
      featured: true
    },
    {
      id: 2,
      title: 'App de Notas Móvil',
      description: 'Aplicación móvil intuitiva para gestión de notas con interfaz moderna y funcionalidades avanzadas. Diseñada para dispositivos móviles con excelente UX.',
      image: '/api/placeholder/400/250',
      technologies: ['Dart', 'Flutter', 'Python', 'SQLite'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AVSL05/Notas-App',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Personal',
      description: 'Portfolio personal desarrollado con React y Vite, con diseño minimalista y moderno. Incluye animaciones suaves y diseño completamente responsive.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript'],
      liveUrl: 'https://avsl05.github.io/Portfolio/',
      githubUrl: 'https://github.com/AVSL05/Portfolio',
      featured: false
    },
    {
      id: 4,
      title: 'Proyecto en Desarrollo',
      description: 'Próximo proyecto en desarrollo utilizando tecnologías modernas. Mantente atento para más actualizaciones.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">
          <SplitText delay={0.2}>Mis proyectos</SplitText>
        </h2>
        <p className="section-subtitle">
          <ShinyText>Aplicaciones desarrolladas con tecnologías modernas y enfoque en la experiencia del usuario</ShinyText>
        </p>
        
        {/* Proyectos destacados */}
        <div className="featured-projects">
          <h3 className="subsection-title">
            <ShinyText>Proyectos destacados</ShinyText>
          </h3>
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
          <h3 className="subsection-title">Proyectos en Desarrollo</h3>
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
