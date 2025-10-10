import React, { useState, useEffect } from 'react'
import './Projects.css'
import SplitText from '../components/SplitText'
import ShinyText from '../components/ShinyText'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [expandedCard, setExpandedCard] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [imageIndex, setImageIndex] = useState({}) // Para manejar el índice de imagen de cada proyecto
  const [fullscreenImage, setFullscreenImage] = useState(null) // Para el modal de imagen
  const [fullscreenIndex, setFullscreenIndex] = useState(0) // Índice de imagen en modal
  const [fullscreenImages, setFullscreenImages] = useState([]) // Array de imágenes para el modal
  const [modalTouchStart, setModalTouchStart] = useState(null) // Touch para modal
  const [modalTouchEnd, setModalTouchEnd] = useState(null) // Touch para modal
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Minimum swipe distance required (in px)
  const minSwipeDistance = 50

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Comercial',
      description: 'Sistema completo de gestión para tienda minorista especializada en ropa, calzado y accesorios. Incluye control de inventario, ventas, clientes y reportes en tiempo real.',
      images: [
        '/images/projects/Gestion de tiendas.png',
        '/images/projects/Gestion de tiendas_3.png'
      ],
      technologies: ['Python', 'MongoDB', 'FastAPI', 'PyQt/Tkinter'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AVSL05/Gestion-tienda',
      featured: true
    },
    {
      id: 2,
      title: 'App de Notas y Calendario Móvil y Macbook IOS',
      description: 'Aplicación de notas y calendario intuitiva para gestión de notas con interfaz moderna y funcionalidades avanzadas. Diseñada para dispositivos móviles y Macbook .',
      images: [
        '/images/projects/App de notas: dalendario 1.png',
        '/images/projects/App de notas: dalendario 2.png',
        '/images/projects/App de notas: dalendario 3.png',
        '/images/projects/App de notas: dalendario 4.png'
      ],
      technologies: ['Swift', 'UIKit', 'SQLite'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AVSL05/Notas-App',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Personal',
      description: 'Portfolio personal desarrollado con React y Vite, con diseño minimalista y moderno. Incluye animaciones suaves y diseño completamente responsive.',
      images: ['/images/projects/portfolio.png'],
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript'],
      liveUrl: 'https://avsl05.github.io/Portfolio/',
      githubUrl: 'https://github.com/AVSL05/Portfolio',
      featured: false
    },
    {
      id: 4,
      title: 'Aplicación con Flutter para Parejas multiplataforma',
      description: 'App móvil multiplataforma (iOS/Android) para parejas con chat en tiempo real, notificaciones push y sincronización entre dispositivos. Desarrollada en Flutter con Firebase como backend.',
      images: ['/images/projects/proyecto-desarrollo.png'],
      technologies: ['Flutter', 'Firebase', 'Dart'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AVSL05/App_parejas-IOS-Android',
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
    if (isTransitioning) return // Prevenir múltiples clics durante la transición
    
    // Comportamiento especial para el proyecto Portfolio (id: 3)
    if (projectId === 3) {
      // Scroll al inicio de la página
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return // No expandir la tarjeta
    }
    
    setIsTransitioning(true)
    setExpandedCard(expandedCard === projectId ? null : projectId)
    setIsAutoPlay(false) // Pause autoplay when expanding
    
    // Resetear transición después de la animación
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const handleImageClose = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setExpandedCard(null)
    
    // Resetear transición y reanudar autoplay
    setTimeout(() => {
      setIsTransitioning(false)
      setIsAutoPlay(true)
    }, 500)
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

  // Funciones para el carrusel de imágenes
  const nextImage = (projectId, totalImages) => {
    setImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (projectId, totalImages) => {
    setImageIndex(prev => ({
      ...prev,
      [projectId]: prev[projectId] > 0 ? prev[projectId] - 1 : totalImages - 1
    }))
  }

  // Funciones para el modal de imagen completa
  const openFullscreenImage = (images, currentIndex, projectTitle) => {
    setFullscreenImages(images)
    setFullscreenIndex(currentIndex)
    setFullscreenImage({ title: projectTitle })
    document.body.style.overflow = 'hidden' // Prevenir scroll del body
  }

  const closeFullscreenImage = () => {
    setFullscreenImage(null)
    setFullscreenImages([])
    setFullscreenIndex(0)
    document.body.style.overflow = 'auto' // Restaurar scroll del body
  }

  // Navegación en el modal
  const nextModalImage = () => {
    setFullscreenIndex(prev => (prev + 1) % fullscreenImages.length)
  }

  const prevModalImage = () => {
    setFullscreenIndex(prev => prev > 0 ? prev - 1 : fullscreenImages.length - 1)
  }

  // Touch handlers para el modal
  const onModalTouchStart = (e) => {
    setModalTouchEnd(null)
    setModalTouchStart(e.targetTouches[0].clientX)
  }

  const onModalTouchMove = (e) => {
    setModalTouchEnd(e.targetTouches[0].clientX)
  }

  const onModalTouchEnd = () => {
    if (!modalTouchStart || !modalTouchEnd) return
    
    const distance = modalTouchStart - modalTouchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextModalImage()
    }
    
    if (isRightSwipe) {
      prevModalImage()
    }
  }

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && fullscreenImage) {
        closeFullscreenImage()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [fullscreenImage])

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
                    >
                      {/* Imagen que se muestra cuando está expandida - NO para Portfolio (id: 3) */}
                      {expandedCard === project.id && project.id !== 3 && (
                        <div className="project-image-expanded">
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

                          {/* Carrusel de imágenes */}
                          <div className="image-carousel">
                            {project.images.length > 1 && (
                              <button 
                                className="image-nav-btn image-nav-prev"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  prevImage(project.id, project.images.length)
                                }}
                              >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                            )}

                            <div className="image-placeholder">
                              <img 
                                src={project.images[imageIndex[project.id] || 0]} 
                                alt={`Captura ${(imageIndex[project.id] || 0) + 1} de ${project.title}`}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  openFullscreenImage(
                                    project.images,
                                    imageIndex[project.id] || 0,
                                    project.title
                                  )
                                }}
                                style={{ cursor: 'pointer' }}
                                onError={(e) => {
                                  // Fallback si la imagen no se encuentra
                                  e.target.style.display = 'none'
                                  e.target.nextSibling.style.display = 'flex'
                                }}
                              />
                              <span style={{ display: 'none' }}>
                                Imagen del proyecto
                              </span>
                            </div>

                            {project.images.length > 1 && (
                              <button 
                                className="image-nav-btn image-nav-next"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  nextImage(project.id, project.images.length)
                                }}
                              >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                            )}
                          </div>

                        </div>
                      )}

                      {/* Contenido principal - información completa cuando no está expandida */}
                      {expandedCard !== project.id && (
                        <div className="project-content-main">
                          <div className="project-header">
                            <h4 className="project-title">{project.title}</h4>
                            <div className="expand-indicator">
                              <svg 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none"
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
                            <button 
                              className="btn btn-primary" 
                              onClick={(e) => {
                                e.stopPropagation()
                                handleCardClick(project.id)
                              }}
                            >
                              {project.id === 3 ? 'Ir al inicio' : 'Toca para ver'}
                            </button>
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
                      )}

                      {/* Contenido comprimido - solo cuando está expandida y NO es Portfolio (id: 3) */}
                      {expandedCard === project.id && project.id !== 3 && (
                        <div className="project-content-compressed">
                          <h4 className="project-title-compressed">{project.title}</h4>
                          <div className="project-links-compressed">
                            <button 
                              className="btn btn-primary" 
                              onClick={(e) => {
                                e.stopPropagation()
                                handleCardClick(project.id)
                              }}
                            >
                              Ocultar imagen
                            </button>
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
                      )}
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

      {/* Modal de imagen en pantalla completa */}
      {fullscreenImage && (
        <div className="fullscreen-modal" onClick={closeFullscreenImage}>
          <div 
            className="fullscreen-modal-content" 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onModalTouchStart}
            onTouchMove={onModalTouchMove}
            onTouchEnd={onModalTouchEnd}
          >
            <button className="fullscreen-close-btn" onClick={closeFullscreenImage}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Navegación solo si hay más de una imagen */}
            {fullscreenImages.length > 1 && (
              <>
                <button className="modal-nav-btn modal-nav-prev" onClick={prevModalImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <button className="modal-nav-btn modal-nav-next" onClick={nextModalImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </>
            )}

            <img 
              src={fullscreenImages[fullscreenIndex]} 
              alt={`Imagen ${fullscreenIndex + 1} de ${fullscreenImage.title}`}
              className="fullscreen-image"
            />
            
            <div className="fullscreen-info">
              <div className="fullscreen-title">{fullscreenImage.title}</div>
              {fullscreenImages.length > 1 && (
                <div className="fullscreen-counter">
                  {fullscreenIndex + 1} de {fullscreenImages.length}
                </div>
              )}
            </div>

            {/* Dots navigation para el modal */}
            {fullscreenImages.length > 1 && (
              <div className="modal-dots">
                {fullscreenImages.map((_, index) => (
                  <button
                    key={index}
                    className={`modal-dot ${index === fullscreenIndex ? 'active' : ''}`}
                    onClick={() => setFullscreenIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
