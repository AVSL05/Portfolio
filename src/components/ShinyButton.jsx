import React, { useRef, useEffect } from 'react';
import './ShinyButton.css';

const ShinyButton = ({ 
  children, 
  onClick,
  className = '',
  delay = 0,
  speed = '2s',
  disabled = false
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (disabled || !buttonRef.current) return;

    const button = buttonRef.current;
    
    // Configurar la velocidad de la animación
    button.style.setProperty('--shine-speed', speed);

    // Iniciar la animación después del delay
    const timeoutId = setTimeout(() => {
      button.classList.add('shiny-animation');
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay, speed, disabled]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`shiny-button ${className}`}
      disabled={disabled}
    >
      <span className="button-content">
        {children}
      </span>
      <div className="shine-overlay"></div>
    </button>
  );
};

export default ShinyButton;