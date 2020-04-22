import * as React from "react";
import Slider from "react-slick";
import "./style.scss";

import cashback from "assets/img/cashback.png";
import card from "assets/img/card.png";
import business from "assets/img/business.png";
import { CustomIcon } from "common/components/img/index";

interface IArrowProps{
  className?: string,
  style?: string,
  onClick? : () => void
}




export const SliderComponent = () => {

  const SampleNextArrow = ({ className, style, onClick } : IArrowProps) => {
    return (
      <div className="slick-next" style={{ ...style }}>
        <CustomIcon name="arrow-right" onClick={onClick} size="30px" />
      </div>
    );
  }

  const  SamplePrevArrow = ( {className, style, onClick} : IArrowProps) =>  {
    return (
      <div className="slick-prev" style={{ ...style }}>
        <CustomIcon name="arrow-left" onClick={onClick} size="30px" />
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider",
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    fade: true,
    lazyLoad: true,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="wrapper">
      <Slider {...settings}>
        <div className="box">
          <img src={cashback} />
        </div>
        <div className="box">
          <img src={card} />
        </div>
        <div className="box">
          <img src={business} />
        </div>
      </Slider>
    </div>
  );
};
