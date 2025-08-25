import React from 'react'
import './Hero.css'
import SplitText from '../components/SplitText'
import ShinyText from '../components/ShinyText'

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            <SplitText delay={0.5}>Hola, soy </SplitText>
            <SplitText delay={0.8} className="gradient-text">Vicente</SplitText>
          </h1>
          <p className="hero-subtitle">
            <ShinyText>Desarrollador de Software</ShinyText>
          </p>
          <p className="hero-description">
            Creo experiencias digitales excepcionales utilizando tecnologías modernas.
            Y me gusta experimentar con nuevas herramientas y frameworks.
            Me especializo en todo tipo de herramientas modernas para el desarrollo web y la creación de experiencias interactivas.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Ver mis proyectos
            </a>
            <a href="#contact" className="btn">
              Contactarme
            </a>
          </div>
        </div>
        <div className="hero-visual fade-in">
          <div className="code-snippet">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
              </div>
              <div className="code-line indent">
                <span className="property">name</span>: <span className="string">'Vicente'</span>,
              </div>
              <div className="code-line indent">
                <span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'Node.js'</span>],
              </div>
              <div className="code-line indent">
                <span className="property">passion</span>: <span className="string">'Crear código limpio'</span>
              </div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
