import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Vicente</h3>
            <p className="footer-description">
              Desarrollador Full Stack apasionado por crear soluciones innovadoras
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Angel Vicente Santana Loera. Todos los derechos reservados.
          </p>
          <p className="made-with">
            Hecho con React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
