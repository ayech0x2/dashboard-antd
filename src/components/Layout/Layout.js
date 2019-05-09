import React, {useState} from 'react';
import styled from "styled-components";
import SideMenu from "../SideMenu/SideMenu";
import NavigationTop from "../NavigationTop/NavigationTop";
import AppRoutes from "../AppRoutes/AppRoutes";

import "./layout.scss";
import Loading from "../Loading/Loading";

const Layout = (props) => {
  const [isSideMenuOpened, setIisSideMenuOpened] = useState(true);
  return (
    <div className="layout">
      <Loading/>
      <SideMenuContainer isSideMenuOpened={isSideMenuOpened} className="side-menu-container">
        <SideMenu/>
      </SideMenuContainer>
      <div className="content">
        <div className="navbar-top">
          <NavigationTop  setIisSideMenuOpened={setIisSideMenuOpened} isSideMenuOpened={isSideMenuOpened}/>
        </div>
        <div className="children">
          <AppRoutes/>
        </div>
      </div>
    </div>
  );
};

export default Layout;


const SideMenuContainer = styled.h1`
max-width: ${props => props.isSideMenuOpened ? '30rem' : 0};

`;
