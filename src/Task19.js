import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
          observer.disconnect(); 
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current); 
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={isVisible ? src : 'placeholder.jpg'}
      alt={alt}
      style={{ width: '100%', height: 'auto' }}
    />
  );
};

const Task19 = () => {
  const images = [
    'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3',
    'https://via.placeholder.com/600x400?text=Image+4',
    'https://via.placeholder.com/600x400?text=Image+5',
    'https://via.placeholder.com/600x400?text=Image+6',
    'https://via.placeholder.com/600x400?text=Image+7',
    'https://via.placeholder.com/600x400?text=Image+8',
    'https://via.placeholder.com/600x400?text=Image+9',
    'https://via.placeholder.com/600x400?text=Image+10',


  ];

  return (
    <div>
      <h1>Lazy Loaded Image Gallery</h1>
      {images.map((src, index) => (
        <LazyImage key={index} src={src} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default Task19;
