import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./js/NavBarElements";

const NavBar = ({ isAuthenthicated, toogle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>PASGC</h1>
        </NavLink>

        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>

          <NavLink to="/about" activeStyle>
            About
          </NavLink>

          {isAuthenthicated && (
            <>
              <NavLink to="/profile" activeStyle>
                Profile
              </NavLink>

              <NavLink to="/analysis" activeStyle>
                Analysis
              </NavLink>
            </>
          )}

          {!isAuthenthicated && (
            <>
              <NavBtn>
                <NavBtnLink to="/login">Login</NavBtnLink>
              </NavBtn>

              <NavBtn>
                <NavBtnLink to="/signup">Sign Up</NavBtnLink>
              </NavBtn>
            </>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
