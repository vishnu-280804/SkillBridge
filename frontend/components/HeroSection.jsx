import React, { useState, useEffect } from 'react';
import "../src/index.css";

const images = [
    "https://media.licdn.com/dms/image/v2/D5612AQGUoD9xyiCfdg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677506167698?e=1744243200&v=beta&t=GbUgMFvIGp8jABjYSRhpH8SH4JeU7SZBSRF5UyuEMx8",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQw0D0RDrdG9XlbIJIoTJPECrf2Tk0T47yYix0DrGO5lloRat4LM7E7M&s=10",
    "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used-1024x683.jpg"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='hero'>
      <button className='left-arrow' onClick={prevSlide}>❮</button>
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        className='slide-image'
      />
      <button className='right-arrow' onClick={nextSlide}>❯</button>
      
      {/* Slide indicators */}
      <div className="slide-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;