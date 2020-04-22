import React from "react";
import {
  NavMenu,
  SubMenu,
  SliderComponent,
  CardsComponent,
  ConsumerLoan,
} from "./components/index";


export const MainPage = (): JSX.Element => {
  return (
    <>
      <NavMenu />
      <SubMenu />
      <SliderComponent />
      <CardsComponent />
      <ConsumerLoan />
    </>
  );
};
