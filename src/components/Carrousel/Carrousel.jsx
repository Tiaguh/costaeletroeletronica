import React from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

export default class VideoCarousel extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
      return (
        <Slider {...settings}>
          <div>
            <ReactPlayer url="./videos/Video1.mp4" controls={true} width="100%" height="100%" />
          </div>
          <div>
            <ReactPlayer url="./videos/Video2.mp4" controls={true} width="100%" height="100%" />
          </div>
          <div>
            <ReactPlayer url="./videos/Video3.mp4" controls={true} width="100%" height="100%" />
          </div>
          {/* Adicione mais vídeos aqui */}
        </Slider>
      );
    }
  }
  