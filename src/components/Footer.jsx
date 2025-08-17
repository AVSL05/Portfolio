import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/tu-usuario',
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tu-perfil',
      icon: '💼'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/tu-usuario',
      icon: '🐦'
    },
    {
      name: 'Email',
      url: 'mailto:tu.email@ejemplo.com',
      icon: '📧'
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Tu Nombre</h3>
            <p className="footer-description">
              Desarrollador Full Stack apasionado por crear soluciones innovadoras
            </p>
          </div>
          
          <div className="footer-links">
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <span className="social-icon">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Tu Nombre. Todos los derechos reservados.
          </p>
          <p className="made-with">
            Hecho con ❤️ y React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
