import React from "react";
import "./perks.css";
import SectionBadge from "../sectionBadge/SectionBadge";
import bullet from "../assets/images/bullet.png";
import bg0 from "../assets/images/bg5.jpg";
import bg1 from "../assets/images/bg6.jpg";
import Deco from "../deco/Deco";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Perks = () => {
  return (
    <div className="perk-section">
      <div className="perk-section-image">
        <div className="deco2">
          <Deco />
        </div>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
        >
          <img className="sec3-image0" src={bg0} alt="growfy" />
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
          delay={200}
          style={{ bottom: "0px", display: "flex" }}
        >
          <img className="sec3-image1" src={bg1} alt="growfy" />
        </AnimationOnScroll>
      </div>
      <div className="perks-text-section">
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <SectionBadge>WHY CHOOSE US</SectionBadge>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <h1 className="topic">
            We help great brands scale with content marketing
          </h1>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <p className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestiae, amet nemo eum obcaecati temporibus voluptate itaque quas
            perferendis nihil ut dolores quae blanditiis illo? Perferendis a
            veniam ducimus cupiditate.
          </p>
          <ul className="perks-list">
            <li>
              {" "}
              <img src={bullet} alt="*" /> This is one of our perks
            </li>
            <li>
              {" "}
              <img src={bullet} alt="*" /> This is one of our perks
            </li>
            <li>
              {" "}
              <img src={bullet} alt="*" /> This is one of our perks
            </li>
            <li>
              {" "}
              <img src={bullet} alt="*" /> This is one of our perks
            </li>
          </ul>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Perks;
