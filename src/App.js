import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import "./index.css";

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Analysis from "./components/Analysis";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import UpdatedNavBar from "./components/UpdatedNavBar";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const login = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toogle={toggle} />
      {/* <NavBar toogle={toggle} /> */}
      <UpdatedNavBar toggle={toggle} IsLogin={isLogin} login={login} />
      <body>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/analysis" element={<Analysis />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </body>
      <Footer />
    </>
  );
}

export default App;
