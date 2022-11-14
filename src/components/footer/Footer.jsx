import React from "react";
import "./footer.css";
import logo from "../assets/images/logo.png";
import Button from "../button/button";
import webflow from "../assets/images/webflow.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <AnimationOnScroll
          animateIn="animate__fadeInDown"
          animateOut="animate__fadeOutUp"
          delay={0}
        >
          <div>
            <img src={logo} alt="Growfy" className="logo" />
            <p className="footer-bar-1 footer-sub-topic">
              Growfy is a template highly suitable for modern marketing
              agencies, digital studios, startups and businesses. The design is
              made in the dark style, which makes the site memorable and you can
              easily adapt it to your brand.
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInDown"
          animateOut="animate__fadeOutUp"
          delay={150}
        >
          <div>
            <h3 className="footer-topic">Pages</h3>
            <p className="footer-sub-topic">Home</p>
            <p className="footer-sub-topic">About</p>
            <p className="footer-sub-topic">Services</p>
            <p className="footer-sub-topic">Packages</p>
            <p className="footer-sub-topic">Blog</p>
            <p className="footer-sub-topic">Contact</p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInDown"
          animateOut="animate__fadeOutUp"
          delay={300}
        >
          <div>
            <h3 className="footer-topic">Utility Pages </h3>
            <p className="footer-sub-topic">Instructions</p>
            <p className="footer-sub-topic">Style Guides</p>
            <p className="footer-sub-topic">Licences</p>
            <p className="footer-sub-topic">Changelog</p>
            <p className="footer-sub-topic">404 not found</p>
            <p className="footer-sub-topic">Password protected</p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInDown"
          animateOut="animate__fadeOutUp"
          delay={450}
        >
          <div>
            <h3 className="footer-topic">Suscrible to our newsletter</h3>
            <p className="footer-sub-topic">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className="newsletter-form">
              <input
                type="text"
                className="newsletter-field"
                placeholder="Enter your email"
              />
              <Button type="primary">Suscribe</Button>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOut="animate__fadeOutDown"
      >
        <div className="footer-remarks">
          <p className="footer-sub-topic">
            &copy; Growfy - Powered by{" "}
            <img className="webflow" src={webflow} alt="webflow" /> - Created by{" "}
            <span className="footer-dev-name">Zosu Semako</span>
          </p>
        </div>
      </AnimationOnScroll>
    </>
  );
};

export default Footer;
