import React, { useState, useEffect } from 'react'
import './Projects.css'
import SplitText from '../components/SplitText'
import ShinyText from '../components/ShinyText'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [expandedCard, setExpandedCard] = useState(null)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Minimum swipe distance required (in px)
  const minSwipeDistance = 50

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

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || expandedCard !== null) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, projects.length, expandedCard])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setExpandedCard(null) // Close any expanded card when navigating
  }

  const handleMouseEnter = () => setIsAutoPlay(false)
  const handleMouseLeave = () => setIsAutoPlay(true)

  const handleCardClick = (projectId) => {
    setExpandedCard(expandedCard === projectId ? null : projectId)
    setIsAutoPlay(false) // Pause autoplay when expanding
  }

  const handleImageClose = () => {
    setExpandedCard(null)
    setIsAutoPlay(true) // Resume autoplay when closing
  }

  // Touch/Swipe handlers
  const onTouchStart = (e) => {
    setTouchEnd(null) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
    setIsAutoPlay(false) // Pause autoplay when user starts swiping
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      // Swipe left - next slide (circular)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
      setExpandedCard(null)
    }
    
    if (isRightSwipe) {
      // Swipe right - previous slide (circular)
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      )
      setExpandedCard(null)
    }
    
    // Resume autoplay after a short delay
    setTimeout(() => {
      if (expandedCard === null) {
        setIsAutoPlay(true)
      }
    }, 3000)
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">
          <SplitText delay={0.2}>Mis proyectos</SplitText>
        </h2>
        <p className="section-subtitle">
          <ShinyText>Aplicaciones desarrolladas con tecnologías modernas y enfoque en la experiencia del usuario</ShinyText>
        </p>
        
        {/* Project Carousel */}
        <div className="projects-carousel-container">
          <h3 className="subsection-title">
            <ShinyText>Proyectos destacados</ShinyText>
          </h3>
          
          <div 
            className="projects-carousel"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Slides Container */}
            <div className="carousel-slides">
              <div 
                className="carousel-track"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: 'transform 0.5s ease-in-out'
                }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="carousel-slide">
                    <div 
                      className={`project-card-carousel ${expandedCard === project.id ? 'expanded' : ''}`}
                      onClick={() => handleCardClick(project.id)}
                    >
                      {/* Main Card Content */}
                      <div className="project-content-main">
                        <div className="project-header">
                          <h4 className="project-title">{project.title}</h4>
                          <div className="expand-indicator">
                            <svg 
                              width="24" 
                              height="24" 
                              viewBox="0 0 24 24" 
                              fill="none"
                              className={expandedCard === project.id ? 'rotated' : ''}
                            >
                              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        
                        <p className="project-description">{project.description}</p>
                        
                        <div className="project-technologies">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="project-links">
                          <a 
                            href={project.liveUrl} 
                            className="btn btn-primary" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Ver proyecto
                          </a>
                          <a 
                            href={project.githubUrl} 
                            className="btn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Código
                          </a>
                        </div>
                      </div>

                      {/* Expandable Image Section */}
                      <div className={`project-image-section ${expandedCard === project.id ? 'visible' : ''}`}>
                        <button 
                          className="close-image-btn"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleImageClose()
                          }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <div className="project-image-container">
                          <div className="image-placeholder">
                            <span>Imagen del proyecto</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
