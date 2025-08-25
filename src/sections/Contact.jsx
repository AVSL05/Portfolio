import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import SplitText from '../components/SplitText'
import ShinyText from '../components/ShinyText'

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
    
    try {
      // Configuración de EmailJS con tus claves reales
      const serviceID = 'service_qws1koa'
      const templateID = 'template_ffryt7t'  
      const publicKey = 'n0F4RndK3jLrgDeq5'
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'angelvicentesl05@gmail.com',
        message: formData.message,
        reply_to: formData.email
      }
      
      console.log('Enviando email con EmailJS...', templateParams)
      
      // Envío real con EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      
      setIsSubmitting(false)
      setSubmitMessage(`¡Mensaje enviado correctamente! Te responderé pronto a ${formData.email}`)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
      
    } catch (error) {
      setIsSubmitting(false)
      setSubmitMessage('Error al enviar el mensaje. Por favor, contáctame directamente a angelvicentesl05@gmail.com')
      console.error('Error enviando email:', error)
    }
  }

  const contactInfo = [
    {
      label: 'Email',
      value: 'angelvicentesl05@gmail.com',
      link: 'mailto:angelvicentesl05@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: '/in/angel-santana-58a5012b3',
      link: 'https://www.linkedin.com/in/angel-santana-58a5012b3'
    },
    {
      label: 'GitHub',
      value: '/AVSL05',
      link: 'https://github.com/AVSL05'
    }
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">
          <SplitText delay={0.2}>Contacto</SplitText>
        </h2>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>
              <ShinyText>Conectemos</ShinyText>
            </h3>
            <p>
              <ShinyText>Estoy siempre abierto a discutir nuevas oportunidades, proyectos interesantes o simplemente tener una conversación sobre tecnología.</ShinyText>
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
