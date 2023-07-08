import React, { useRef, useState } from 'react';
import "./Carousel.css";
import { BiChevronLeft, BiChevronRight, BiPlay, BiPause } from "react-icons/bi";

import video1 from './videos/Video1.mp4';
import video2 from './videos/Video2.mp4';
import video3 from './videos/Video3.mp4';

const videos = [video1, video2, video3];

const Carousel = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const nextVideo = () => {
    setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
    setIsPlaying(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  const previousVideo = () => {
    setCurrentVideoIndex((currentVideoIndex - 1 + videos.length) % videos.length);
    setIsPlaying(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div className="carousel">

      <button onClick={previousVideo}>
        <BiChevronLeft color='#FFF' size={50} />
      </button>

      <div className="video-container">
        <video ref={videoRef} src={videos[currentVideoIndex]} type="video/mp4" onClick={togglePlay} />
        {!isPlaying ? (
          <div className="pause-overlay" onClick={togglePlay}>
            <BiPause color='#FFF' size={100} />
          </div>
        ) : null}
      </div>

      <button onClick={nextVideo}>
        <BiChevronRight color='#FFF' size={50} />
      </button>

    </div>
  );
};

export default Carousel;
