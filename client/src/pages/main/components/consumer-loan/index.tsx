import * as React from "react";
import { Container, Grid, Header } from "common/components/controls/external";
import { ConsumerDeal, SideBarConsumerLoa } from "./components/index";
import "./style.scss";

export const ConsumerLoan = () => {
  return (
    <Container className="consumer-deal">
      <Header className="deposit-header" as="h2">
        Потребительский кредит онлайн
      </Header>
      <Grid columns={2} relaxed="very">
        <ConsumerDeal />
        <SideBarConsumerLoa />
      </Grid>
    </Container>
  );
};
