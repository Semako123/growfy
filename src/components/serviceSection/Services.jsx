import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import "./services.css";
import logo0 from "../assets/images/cLogo.png";
import logo1 from "../assets/images/cLogo1.png";
import logo2 from "../assets/images/cLogo2.png";
import logo3 from "../assets/images/cLogo3.png";
import SectionBadge from "../sectionBadge/SectionBadge";
import Button from "../button/button";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Services = () => {
  return (
    <div className="service-section">
      <div className="service-texts-sec">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
          offset={50}
        >
          <SectionBadge>SERVICES</SectionBadge>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
          offset={100}
        >
          <h1 className="topic">Services we offer</h1>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__bounceInUp"
          animateOut="animate__bounceOutDown"
        >
          <p className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            totam, accusamus placeat adipisci impedit architecto voluptatibus
            officia ipsa perspiciatis magnam nam ratione odit molestias maiores
            consectetur dolore magni est blanditiis!
          </p>
          <Button type="primary">All services</Button>
        </AnimationOnScroll>
      </div>
      <div className="service-cards-sec">
        <div className="service-cards-sec1">
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOut="animate__fadeOutUpBig"
          >
            <ServiceCard logo={logo0} topic="SEO Optimization">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              beatae consequatur consectetur adipisicing.
            </ServiceCard>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOut="animate__fadeOutUpBig"
          >
            <ServiceCard logo={logo1} topic="Social Media Marketing">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              beatae consequatur adipisicing.
            </ServiceCard>
          </AnimationOnScroll>
        </div>
        <div className="service-cards-sec2">
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOut="animate__fadeOutUpBig"
          >
            <ServiceCard logo={logo2} topic="Paid Advertising">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              beatae consequatur adipisicing.
            </ServiceCard>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOut="animate__fadeOutUpBig"
          >
            <ServiceCard logo={logo3} topic="Email Marketing">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              beatae consequatur adipisicing.
            </ServiceCard>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Services;
