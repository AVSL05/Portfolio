import React, { useState, useEffect } from 'react';
import './DecryptedText.css';

const DecryptedText = ({ 
  text, 
  delay = 0, 
  speed = 50,
  characters = "!@#$%^&*()_+-=[]{}|;:,.<>?",
  className = "" 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);

  useEffect(() => {
    // Inicializar con caracteres aleatorios desde el principio
    const initRandomText = () => {
      let randomText = '';
      for (let i = 0; i < text.length; i++) {
        randomText += characters[Math.floor(Math.random() * characters.length)];
      }
      setDisplayText(randomText);
    };

    // Mostrar caracteres aleatorios inmediatamente
    initRandomText();

    let timeoutId;
    
    const startDecryption = () => {
      setIsDecrypting(true);
      let currentIndex = 0;
      const maxIterations = 3;
      let currentIteration = 0;
      
      const decrypt = () => {
        let newText = '';
        
        for (let i = 0; i < text.length; i++) {
          if (i < currentIndex) {
            // Caracter ya revelado
            newText += text[i];
          } else if (i === currentIndex && currentIteration < maxIterations) {
            // Caracter siendo "descifrado"
            newText += characters[Math.floor(Math.random() * characters.length)];
          } else {
            // Caracteres aún no procesados
            newText += characters[Math.floor(Math.random() * characters.length)];
          }
        }
        
        setDisplayText(newText);
        
        currentIteration++;
        
        if (currentIteration >= maxIterations) {
          currentIndex++;
          currentIteration = 0;
        }
        
        if (currentIndex <= text.length) {
          timeoutId = setTimeout(decrypt, speed);
        } else {
          setDisplayText(text);
          setIsDecrypting(false);
        }
      };
      
      decrypt();
    };

    timeoutId = setTimeout(startDecryption, delay);
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, delay, speed, characters]);

  return (
    <span className={`decrypted-text ${isDecrypting ? 'decrypting' : ''} ${className}`}>
      {displayText}
    </span>
  );
};

export default DecryptedText;