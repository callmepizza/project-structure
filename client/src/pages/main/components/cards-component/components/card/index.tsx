import * as React from "react";
import { Grid, Image, Button } from "common/components/controls/external";
import "./style.scss";

interface ICustomCardProps {
  image: string;
  title: string;
  discription: string;
}

export const CustomCard = ({ image, title, discription }: ICustomCardProps): JSX.Element => (
  <Grid.Column className="card">
    <div className="wrapper-card">
      <div className="image-card">
        <Image src={image} />
      </div>
      <div>
        <h3 className="title">{title}</h3>
        <p className="discription">{discription}</p>
      </div>
    </div>
    <Button className="custom-button-card">Оформить</Button>
  </Grid.Column>
);
