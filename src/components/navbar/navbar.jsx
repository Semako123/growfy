import React from "react";
import "./navbar.css";
import logo from "../assets/images/logo.png";
import Button from "../button/button";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Navbar = () => {
  return (
    <AnimationOnScroll animateIn="animate__flipInX" animateOut="animate__flipOutX" offset={50}>
      <div className="navbar">
        <img src={logo} alt="Growfy" className="logo" />
        <ul className="navCon">
          <li>Home</li>
          <li>About</li>
          <li style={{ marginRight: "30px" }}>Pages</li>
          <li>Services</li>
          <li>
            Cart<span className="cart-badge">0</span>
          </li>
          <Button type="primary">Get Started</Button>
        </ul>
      </div>
    </AnimationOnScroll>
  );
};

export default Navbar;
