import * as React from "react";
import {
  Menu,
  Container,
  Icon,
  Button,
} from "common/components/controls/external";
import "./style.scss";
export const SubMenu = () => {
  return (
    <div className="sub-navigation">
      <Container>
        <Menu secondary stackable>
          <Menu.Menu position="left">
            <Menu.Item>Кредитные Карты</Menu.Item>
            <Menu.Item>Дебетовые Карты</Menu.Item>
            <Menu.Item>Вклады</Menu.Item>
            <Menu.Item>Кредит наличными</Menu.Item>
            <Menu.Item>Ипотека</Menu.Item>
            <Menu.Item>Prime</Menu.Item>
            <Menu.Item>Страхование</Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Icon name="phone" size="big" className="icon" />
          </Menu.Menu>
          <Menu.Menu position="right" />
        </Menu>
      </Container>
    </div>
  );
};
