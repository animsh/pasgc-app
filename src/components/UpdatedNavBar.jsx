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

const UpdatedNavBar = ({ isAuthenticated, toggleAuth, toggle, IsLogin, login }) => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    toggleAuth();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Logo</NavLogo>
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
