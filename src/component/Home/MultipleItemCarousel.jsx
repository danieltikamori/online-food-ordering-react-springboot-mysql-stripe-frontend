import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselItem from "./CarouselItem";
import { topmeals } from "./TopMeals";

const MultipleItemCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
    arrows: false
  };

  return (
    <div>
      <Slider {...settings}>
        {topmeals.map((item) => (
          <CarouselItem key={item} image={item.image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItemCarousel;
