import * as React from "react";
import { Button } from "common/components/controls/external";
import "./style.scss";

interface ICustomSlideProps {
  img: string;
  alt: string;
  title: string;
  text: string;
  textButton: string;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}

export const CustomSlide = ({ img, alt, title, text, textButton, onClick }: ICustomSlideProps): JSX.Element => {
  return (
    <div className="slide">
      <div className="image-block">
        <img src={img} alt={alt} />
      </div>
      <div className="text-slide">
        <p>{title}</p>
        <h2>{text}</h2>
        <Button className="button-slide" onClick={onClick}>
          {textButton}
        </Button>
      </div>
    </div>
  );
};
