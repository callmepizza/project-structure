import React, { useState } from "react";
import { Icon, Menu, Button, Container } from "common/components/controls/external";

import * as logo from "assets/img/logo.svg";
import "./style.scss";

interface IHandlerProps {
  name: string;
}

export const NavMenu = (): JSX.Element => {
  const [active, changeActive] = useState("main");
  const hanlderClick = (e: MouseEvent, { name }: IHandlerProps): void => changeActive(name);
  return (
    <Container>
      <Menu secondary className="navigation">
        <Menu.Menu position="left" className="menu-items-right">
          <Menu.Item>
            <img src={logo} alt="logo" className="logo" />
          </Menu.Item>
          <Menu.Item content="Банк" name="sale" active={active === "sale"} onClick={hanlderClick} />
          <Menu.Item content="Бизнес" name="delivery" active={active === "delivery"} onClick={hanlderClick} />
          <Menu.Item content="Инвестиции" name="aboutus" active={active === "aboutus"} onClick={hanlderClick} />
          <Menu.Item content="Строхование" name="aboutus" active={active === "aboutus"} onClick={hanlderClick} />
          <Menu.Item content="Путешествие" name="aboutus" active={active === "aboutus"} onClick={hanlderClick} />
          <Menu.Item content="Развлечения" name="aboutus" active={active === "aboutus"} onClick={hanlderClick} />
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button className="button">
              <Icon name="sign in" className="icon" />
              Личный кабинет
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  );
};
