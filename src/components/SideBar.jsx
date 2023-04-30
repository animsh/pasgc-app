import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./js/SideBarElements";

const SideBar = ({ isOpen, toogle }) => {
  let isAuthenthicated = true;
  return (
    <SidebarContainer isOpen={isOpen} onClick={toogle}>
      <Icon onClick={toogle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {isAuthenthicated && (
            <>
              <SidebarLink to="/" activeStyle>
                Home
              </SidebarLink>

              <SidebarLink to="/profile" activeStyle>
                Profile
              </SidebarLink>

              <SidebarLink to="/analysis" activeStyle>
                Analysis
              </SidebarLink>
            </>
          )}
          <SidebarLink to="/about" activeStyle>
            About
          </SidebarLink>
        </SidebarMenu>

        {!isAuthenthicated && (
          <>
            <SideBtnWrap>
              <SidebarRoute to="/login">Login</SidebarRoute>
            </SideBtnWrap>

            <SideBtnWrap style={{ marginTop: "24px" }}>
              <SidebarRoute to="/signin">Signup</SidebarRoute>
            </SideBtnWrap>
          </>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
