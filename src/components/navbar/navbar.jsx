import React from "react";
import "./navbar.css";
import logo from "../assets/images/logo.png";
import Button from "../button/button";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Growfy" className="logo" />
      <ul className="navCon">
        <li>Home</li>
        <li>About</li>
        <li style={{ marginRight:"30px" }}>Pages</li>
        <li>Services</li>
        <li>Cart</li>
        <Button type="primary">Get Started</Button>
      </ul>
    </div>
  );
};

export default Navbar;
