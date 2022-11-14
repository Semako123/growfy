import React from "react";
import "./navbar.css";
import logo from "../assets/images/logo.png";
import Button from "../button/button";
import cancel from "../assets/images/cancel.png";
import menu from "../assets/images/menu.png";
import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const handleMenuClick = () => {
    settoggle((toggle) => (!toggle))
  }
  return (
    <AnimationOnScroll
      animateIn="animate__flipInX"
      animateOut="animate__flipOutX"
      offset={40}
    >
      <div className="navbar">
        <img src={logo} alt="Growfy" className="logo" />
        <ul className={`navCon-before ${toggle ? "navCon-mobile" : "navCon"}`}>
          <li>Home</li>
          <li>About</li>
          <li style={{ marginRight: "30px" }}>Pages</li>
          <li>Services</li>
          <li>
            Cart<span className="cart-badge">0</span>
          </li>
          <div className="button-div">
            <Button type="primary">Get Started</Button>
          </div>
        </ul>
        <div className="toggle">
          <img
            className={`toggle-images ${toggle ? "visible" : "transparent"}`}
            src={cancel}
            alt="toggle"
          />
          <img
            className={`toggle-images ${toggle ? "transparent" : "visible"}`}
            src={menu}
            alt="toggle"
            onClick={handleMenuClick}
          />
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Navbar;
