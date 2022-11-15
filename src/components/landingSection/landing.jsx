import React from "react";
import "./landing.css";
import Button from "../button/button";
import Deco from "../deco/Deco";
import bg0 from "../assets/images/bg0.jpg";
import bg1 from "../assets/images/bg1.jpg";
import bg3 from "../assets/images/bg3.jpg";
import bg4 from "../assets/images/bg4.jpg";
import logob0 from "../assets/images/logoB3.png";
import logob1 from "../assets/images/logoB2.png";
import logob2 from "../assets/images/logoB1.png";
import logob3 from "../assets/images/logoB.png";
import logob4 from "../assets/images/logoB4.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Landing = () => {
  return (
    <div>
      <div className="landing">
        <div className="landing-texts">
          <div className="deco1">
            <AnimationOnScroll
              animateIn="animate__fadeInDown"
              animateOut="animate__fadeOutDown"
              offset={0}
            >
              <Deco />
            </AnimationOnScroll>
          </div>
          <div className="landing-content">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOut="animate__fadeOutLeft"
              offset={0}
            >
              <h1 className="topic">
                Marketing solution that grow your business.
              </h1>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateIn="animate__bounceInUp"
              animateOut="animate__bounceOutUp"
            >
              <p className="details">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem in dolores doloremque laborum id facere nostrum,
                vel, expedita quas voluptatum natus aut eligendi atque illo,
                recusandae maiores blanditiis? Cumque, illum!
              </p>
              <div className="btns">
                <Button type="primary">Our Services</Button>
                <Button type="secondary">Contact Us</Button>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="landing-images">
          <div className="landing-images-sub">
            <div className="image-containers">
              <AnimationOnScroll
                animateIn="animate__fadeInLeft"
                animateOut="animate__fadeOutLeft"
              >
                <img className="bg0" src={bg0} alt="growfy" />
              </AnimationOnScroll>
            </div>
            <div className="image-containers">
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutDown"
              >
                <img className="bg1" src={bg1} alt="growfy" />
              </AnimationOnScroll>
            </div>
          </div>
          <div className="landing-images-sub">
            <div className="image-containers">
              <AnimationOnScroll
                animateIn="animate__fadeInRight"
                animateOut="animate__fadeOutRight"
              >
                <img className="bg3" src={bg3} alt="growfy" />
              </AnimationOnScroll>
            </div>
            <div className="image-containers">
              <AnimationOnScroll
                animateIn="animate__fadeInDown"
                animateOut="animate__fadeOutUp"
              >
                <img className="bg4" src={bg4} alt="growfy" />
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AnimationOnScroll
          offset={60}
          animateIn="animate__lightSpeedInLeft"
          animateOut="animate__lightSpeedOutRight"
        >
          <p className="b-text">TRUSTED BY STARTUPS AND LARGE ENTERPRISES</p>
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll
        animateIn="animate__backInDown"
        animateOut="animate__backOutUp"
        offset={50}
      >
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
      </AnimationOnScroll>
    </div>
  );
};

export default Landing;
