import React from 'react'
import './Hero.css'
import SplitText from '../components/SplitText'
import ShinyText from '../components/ShinyText'
import ShinyButton from '../components/ShinyButton'
import DecryptedText from '../components/DecryptedText'

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
            <ShinyButton 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}
              delay={1000}
            >
              Ver mis proyectos
            </ShinyButton>
            <ShinyButton 
              className="btn"
              onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
              delay={1500}
            >
              Contactarme
            </ShinyButton>
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
                <span className="property">name</span>: <span className="string">'<DecryptedText text="Vicente" delay={2000} speed={80} />'</span>,
              </div>
              <div className="code-line indent">
                <span className="property">skills</span>: [<span className="string">'<DecryptedText text="React" delay={3000} speed={60} />'</span>, <span className="string">'<DecryptedText text="Node.js" delay={3500} speed={60} />'</span>],
              </div>
              <div className="code-line indent">
                <span className="property">passion</span>: <span className="string">'<DecryptedText text="Crear código limpio" delay={4000} speed={70} />'</span>
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
