import React, { useRef, useEffect } from 'react';
import './ShinyText.css';

const ShinyText = ({ 
  children, 
  speed = '3s', 
  disabled = false, 
  className = '' 
}) => {
  const ref = useRef();

  useEffect(() => {
    if (disabled || !ref.current) return;

    const element = ref.current;
    
    // Configurar la velocidad de la animación
    element.style.setProperty('--shine-speed', speed);

    // Crear el Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('shiny-animation');
            observer.unobserve(element); // Solo animar una vez
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [disabled, speed]);

  return (
    <span 
      ref={ref}
      className={`shiny-text ${className}`}
      data-text={children}
    >
      {children}
    </span>
  );
};

export default ShinyText;
