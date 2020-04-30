import * as React from "react";
import Slider from "react-slick";
import "./style.scss";
import { CustomSlide, CustomArrow } from "./components";
import cashback from "assets/img/cashback.png";
import card from "assets/img/card.png";
import business from "assets/img/business.png";
import { settings } from "../../utils/slider";

export const SliderComponent = (): JSX.Element => (
  <div className="wrapper">
    <Slider
      nextArrow={<CustomArrow className="slick-next" icon="arrow-right" onClick={onclick} />}
      prevArrow={<CustomArrow className="slick-prev" icon="arrow-left" onClick={onclick} />}
      {...settings}
    >
      <CustomSlide
        img={cashback}
        alt="cashback slider"
        title="Кэшбэк карта mastercard"
        text="Кэшбэк на все, без условий и ограничений"
        textButton="оформить"
      />
      <CustomSlide img={card} />
      <CustomSlide img={business} />
    </Slider>
  </div>
);
