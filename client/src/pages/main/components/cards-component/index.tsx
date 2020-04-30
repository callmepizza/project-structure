import * as React from "react";
import { Container, Grid } from "common/components/controls/external";
import card from "assets/img/prime-card.png";
import contributions from "assets/img/contributions.png";
import investments from "assets/img/investments.png";
import { CustomCard } from "./components/index";
import "./style.scss";

export const CardsComponent = () => (
  <div className="cards-section">
    <Container>
      <h2>Лучшие редложения:</h2>
      <Grid relaxed="very" columns={3}>
        <CustomCard
          image={card}
          title="Кредитная карта Pocket Black"
          discription="Вы получаете обслуживание в Prime офисе и персонального менеджера"
        />
        <CustomCard
          image={contributions}
          title="Накопительный счет Pocket Старт"
          discription="Накапливайте на остаток по счету 5%"
        />
        <CustomCard
          image={investments}
          title="Инвест Pocket"
          discription="Откройте брокерский счет pocket invest и станьте успешным трейдером"
        />
      </Grid>
    </Container>
  </div>
);
