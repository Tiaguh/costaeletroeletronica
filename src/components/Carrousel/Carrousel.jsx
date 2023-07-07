import React, { useRef } from 'react';
import video1 from './videos/Video1.mp4';
import video2 from './videos/Video2.mp4';
import video3 from './videos/Video3.mp4';

const videos = [video1, video2, video3];

const Carousel = () => {
  const videoRef = useRef(null);
  let currentVideoIndex = 0;

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const nextVideo = () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoRef.current.src = videos[currentVideoIndex];
    playVideo();
  };

  const previousVideo = () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    videoRef.current.src = videos[currentVideoIndex];
    playVideo();
  };

  return (
    <div className="carousel">

      <button onClick={previousVideo}>Anterior</button>

      <video ref={videoRef} controls>
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>

      <button onClick={nextVideo}>Próximo</button>
      
    </div>
  );
};

export default Carousel;
