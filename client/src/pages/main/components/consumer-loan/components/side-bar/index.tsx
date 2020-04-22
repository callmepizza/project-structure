import * as React from "react";
import { Grid, Button } from "common/components/controls/external";
import "./style.scss";

export const SideBarConsumerLoa = () => {
  return (
    <Grid.Column>
      <div className="side-bar">
        <h3>Платеж</h3>
        <h3>Ставка</h3>
        <Button>Оформить</Button>
      </div>
    </Grid.Column>
  );
};
