import React from "react";
import { NavMenu, SubMenu, SliderComponent, CardsComponent, ConsumerLoan } from "./components/index";

export const MainPage = (): JSX.Element => (
  <>
    <NavMenu />
    <SubMenu />
    <SliderComponent />
    <CardsComponent />
    <ConsumerLoan />
  </>
);
