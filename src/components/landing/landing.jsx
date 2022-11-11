import React from "react";
import "./landing.css";
import Button from "../button/button";
import Deco from "../deco/Deco";
import bg0 from "../assets/images/bg0.jpg";
import bg1 from "../assets/images/bg1.jpg";
import bg3 from "../assets/images/bg3.jpg";
import bg4 from "../assets/images/bg4.jpg";
import logob0 from "../assets/images/logoB3.png"
import logob1 from "../assets/images/logoB2.png"
import logob2 from "../assets/images/logoB1.png"
import logob3  from "../assets/images/logoB.png";
import logob4 from "../assets/images/logoB4.png";

const Landing = () => {
  return (
    <div>
      <div className="landing">
        <div className="landing-texts">
          <Deco />
          <div className="landing-content">
            <h1 className="landing-topic">
              Marketing solution that grow your business.
            </h1>
            <p className="landing-details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem in dolores doloremque laborum id facere nostrum,
              vel, expedita quas voluptatum natus aut eligendi atque illo,
              recusandae maiores blanditiis? Cumque, illum!
            </p>
            <div className="btns">
              <Button type="primary">Our Services</Button>
              <Button type="secondary">Contact Us</Button>
            </div>
          </div>
        </div>
        <div className="landing-images">
          <div className="landing-images-sub">
            <div className="image-containers">
              <img className="bg0" src={bg0} alt="growfy" />
            </div>
            <div className="image-containers">
              <img className="bg1" src={bg1} alt="growfy" />
            </div>
          </div>
          <div className="landing-images-sub">
            <div className="image-containers">
              <img className="bg3" src={bg3} alt="growfy" />
            </div>
            <div className="image-containers">
              <img className="bg4" src={bg4} alt="growfy" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="b-text">TRUSTED BY STARTUPS AND LARGE ENTERPRISES</p>
      </div>
      <div className="b-logos">
        <div className="s-blur"></div>
        <div className="e-blur"></div>
        <div>
          <img src={logob0} className="logob" alt="luminous" />
        </div>
        <div>
          <img src={logob1} className="logob" alt="luminous" />
        </div>
        <div>
          <img src={logob2} className="logob" alt="luminous" />
        </div>
        <div>
          <img src={logob3} className="logob" alt="luminous" />
        </div>
        <div>
          <img src={logob4} className="logob" alt="luminous" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
