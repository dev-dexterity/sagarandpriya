import React from 'react';
import two from '../../assets/2.jpg'
import three from '../../assets/3.jpg'
import four from '../../assets/4.jpg'
import five from '../../assets/5.jpg'
import six from '../../assets/6.jpg'
import seven from '../../assets/7.jpg'
import eight from '../../assets/8.jpg'
import nine from '../../assets/9.jpg'
import './gallery.css';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: two,
      alt: "Wedding moment 1",
      title: "Inner World"
    },
    {
      id: 2,
      src: four,
      alt: "Wedding moment 2",
      title: "Engaged"
    },
    {
      id: 3,
      src: three,
      alt: "Wedding moment 3",
      title: "Outer World"
    },
    {
      id: 4,
      src: five,
      alt: "Wedding moment 4",
      title: "Memories"
    },
    {
      id: 5,
      src: six,
      alt: "Wedding moment 5",
      title: "Memories"
    },
    {
      id: 6,
      src: seven,
      alt: "Wedding moment 6",
      title: "Memories"
    },
    {
      id: 7,
      src: eight,
      alt: "Wedding moment 6",
      title: "The Groom"
    },
    {
      id: 8,
      src: nine,
      alt: "Wedding moment 6",
      title: "The Bride"
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h1 className="gallery-title">Gallery</h1>
        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} />
              <div className="image-title">{image.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;