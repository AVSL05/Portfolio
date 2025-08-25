import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SplitText = ({ children, className = '', delay = 0 }) => {
  const textRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Limpiar cualquier animación previa
    gsap.killTweensOf(textElement.children);
    
    // Dividir el texto en letras
    const text = textElement.textContent;
    textElement.innerHTML = '';
    
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char; // Preservar espacios
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(50px)';
      textElement.appendChild(span);
    });

    // Configurar el Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animar las letras
            gsap.to(entry.target.children, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'back.out(1.7)',
              stagger: 0.03,
              delay: delay
            });
            
            // Dejar de observar después de la animación
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(textElement);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      gsap.killTweensOf(textElement.children);
    };
  }, [children, delay]);

  const textClass = `split-text ${className}`.trim();

  return (
    <span ref={textRef} className={textClass}>
      {children}
    </span>
  );
};

export default SplitText;