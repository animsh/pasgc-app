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
import { useState, useEffect } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

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
      <UpdatedNavBar isAuthenticated={isAuthenticated} toggleAuth={toggleAuth} toggle={toggle} IsLogin={isLogin} login={login} />
      <body>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login isAuthenticated={isAuthenticated} toggleAuth={toggleAuth} />} />

          <Route path="/signup" element={<Signup isAuthenticated={isAuthenticated} toggleAuth={toggleAuth} login={login} />} />

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
