import React, { useRef, useState } from 'react';
import "./Carousel-Eletrica.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import image1 from './img/luminaria1.jpeg';
import image2 from './img/luminaria2.jpeg';
import image3 from './img/luminaria3.jpeg';

const images = [image1, image2, image3];

const Carousel = () => {
  const imageRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-imagens">

      <button onClick={previousImage} className="carousel-button">
        <BiChevronLeft color='#FFF' size={50} />
      </button>

      <div className="image-container">
        <img ref={imageRef} src={images[currentImageIndex]} alt="Image" />
      </div>

      <button onClick={nextImage} className="carousel-button">
        <BiChevronRight color='#FFF' size={50} />
      </button>

    </div>
  );
};

export default Carousel;
