import React from 'react';
import {Menu, Icon, Typography, Divider} from "antd";
import {Link} from "react-router-dom";
import UserWidget from "../UserWidget/UserWidget";

import "./sidemenu.scss";

const SideMenu = (props) => {
  const {Text} = Typography;
  return (
    <div className="side-menu">
      <div className="user-widget-container">
        <UserWidget/>
      </div>
      <Divider/>
      <Menu
        className="menu"
        style={{width: 256}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={"inline"}
        theme={"light"}
      >
        <Menu.Item className="menu-item" key="1">
          <Link to={"/"}>
            <Icon type="mail"/>
            Home
          </Link>
        </Menu.Item>

        <Menu.Item className="menu-item" key="2">
          <Link to={"/users"}>
            <Icon type="calendar"/>
            Users
          </Link>
        </Menu.Item>

        <Menu.Item className="menu-item" key="3">
          <Icon type="calendar"/>
          Articles
        </Menu.Item>
        <Menu.Item className="menu-item" key="4">
          <Icon type="calendar"/>
          Charts
        </Menu.Item>
      </Menu>
      <Divider/>
      <div className="side-menu-footer">
        <Text className="copyright"> © 2019 Ayech Hamza - All rights reserved</Text>
      </div>
    </div>
  );
};

export default SideMenu;
