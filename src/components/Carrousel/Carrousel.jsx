import React from 'react';
import Slider from 'react-slick';
import video1 from './videos/Video1.mp4';
import video2 from './videos/Video2.mp4';
import video3 from './videos/Video3.mp4';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class VideoCarousel extends React.Component {
  render() {
    const videos = [video1, video2, video3];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index}>
            <video controls width="100%" height="auto">
              <source src={video} type="video/mp4" />
              Desculpe, seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        ))}
      </Slider>
    );
  }
}

export default VideoCarousel;