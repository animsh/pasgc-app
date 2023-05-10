import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./js/UpdatedNavBarElements";
import { checkToken } from "../helper";
import logo from "../logo_one.svg";

// let logo = require("../logo_one.svg");
// console.log(logo);

const UpdatedNavBar = ({ isAuthenticated, toggleAuth, toggle, IsLogin, login }) => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_enrollment_number');
    toggleAuth();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> <img src={logo} width="50px" alt="" /> </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {isAuthenticated && (
              <>
                <NavItem>
                  <NavLinks to="/">Home</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to="/profile">Profile</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to="/analysis">Analysis</NavLinks>
                </NavItem>
              </>
            )}

            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>

            {!isAuthenticated && (
              <>
                {!IsLogin && (
                  <NavBtn onClick={login}>
                    <NavBtnLink to="/login">Login</NavBtnLink>
                  </NavBtn>
                )}
                {IsLogin && (
                  <NavBtn onClick={login}>
                    <NavBtnLink style={{ marginLeft: "24px" }} to="/signup">
                      Signup
                    </NavBtnLink>
                  </NavBtn>
                )}
              </>
            )}

            {isAuthenticated && (
              <NavBtn onClick={handleLogout}>
                <NavBtnLink to="/">Logout</NavBtnLink>
              </NavBtn>
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default UpdatedNavBar;
