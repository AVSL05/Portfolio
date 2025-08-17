import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('¡Mensaje enviado correctamente! Te responderé pronto.')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'tu.email@ejemplo.com',
      link: 'mailto:tu.email@ejemplo.com'
    },
    {
      icon: '📱',
      label: 'LinkedIn',
      value: '/in/tu-perfil',
      link: 'https://linkedin.com/in/tu-perfil'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: '/tu-usuario',
      link: 'https://github.com/tu-usuario'
    }
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Conectemos</h3>
            <p>
              Estoy siempre abierto a discutir nuevas oportunidades, 
              proyectos interesantes o simplemente tener una conversación sobre tecnología.
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((contact) => (
                <a 
                  key={contact.label}
                  href={contact.link}
                  className="contact-method"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-icon">{contact.icon}</span>
                  <div className="contact-details">
                    <span className="contact-label">{contact.label}</span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-input"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
              
              {submitMessage && (
                <div className="submit-message">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
