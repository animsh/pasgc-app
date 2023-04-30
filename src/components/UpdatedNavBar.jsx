import React from "react";
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

const UpdatedNavBar = ({ toggle, IsLogin, login }) => {
  console.log(toggle);
  let isAuthenthicated = true;
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {isAuthenthicated && (
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

            {!isAuthenthicated && (
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
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default UpdatedNavBar;
