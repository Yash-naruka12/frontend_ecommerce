import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderImages } from "../../Helper/Images";

const HomePageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      style={{
        zIndex: "-1",
      }}
    >
      {SliderImages.map((src, index) => (
        <div className="w-full h-[60%]" key={index}>
          <img src={src} alt="banner" className="w-full h-full z-0" />
        </div>
      ))}
    </Slider>
  );
};

export default HomePageSlider;
