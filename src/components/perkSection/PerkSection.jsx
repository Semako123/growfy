import React from "react";
import "./PerkSection.css";
import SectionBadge from "../sectionBadge/SectionBadge";
import bullet from "../assets/images/bullet.png";
import bg0 from "../assets/images/bg5.jpg";
import bg1 from "../assets/images/bg6.jpg";
import Deco from "../deco/Deco";

const PerkSection = () => {
  return (
    <div className="perk-section">
      <div className="perk-section-image">
        <img className="sec3-image0" src={bg0} alt="growfy" />
        <div className="deco2">
          <Deco />
        </div>
        <img className="sec3-image1" src={bg1} alt="growfy" />
      </div>
      <div className="perks-text-section">
        <SectionBadge>WHY CHOOSE US</SectionBadge>
        <h1 className="topic">
          We help great brands scale with content marketing
        </h1>
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
      </div>
    </div>
  );
};

export default PerkSection;
