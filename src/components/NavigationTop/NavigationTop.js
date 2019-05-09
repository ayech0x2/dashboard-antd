import React from 'react';
import {Icon, Menu} from "antd";

import "./navigationtop.scss";

const NavigationTop = (props) => {
  const {setIisSideMenuOpened, isSideMenuOpened} = props;
  return (
    <div className="navigation-top">
      <div className="menu-toggler" onClick={() => setIisSideMenuOpened(!isSideMenuOpened)}>
        {/*<Icon className="icon" type={` ${isSideMenuOpened ? 'menu-fold' : 'menu-unfold'}`}/>*/}
        <Icon className="icon" type={isSideMenuOpened ? "menu-fold" : "menu-unfold" }/>
      </div>
      <Menu
        mode="horizontal"
        className="menu"
      >
        <Menu.Item className="menu-item" key="1">
          <Icon type="mail"/>Navigation one
        </Menu.Item>
        <Menu.Item className="menu-item" key="2">
          <Icon type="appstore"/>Navigation Two
        </Menu.Item>
        <Menu.Item className="menu-item" key="3">
          <Icon type="appstore"/>Navigation Three
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavigationTop;
