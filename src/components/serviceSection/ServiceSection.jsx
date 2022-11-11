import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import "./serviceSection.css";
import logo0 from "../assets/images/cLogo.png";
import logo1 from "../assets/images/cLogo1.png";
import logo2 from "../assets/images/cLogo2.png";
import logo3 from "../assets/images/cLogo3.png";

const ServiceSection = () => {
  return (
    <div className="service-section">
      <div></div>
      <div className="service-cards-secs">
        <div className="service-cards-sec1">
          <ServiceCard logo={logo0} topic="SEO Optimization">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            beatae consequatur consectetur adipisicing.
          </ServiceCard>
          <ServiceCard logo={logo1} topic="Social Media Marketing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            beatae consequatur adipisicing.
          </ServiceCard>
        </div>
        <div className="service-cards-sec2">
          <ServiceCard logo={logo2} topic="Paid Advertising">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            beatae consequatur adipisicing.
          </ServiceCard>
          <ServiceCard logo={logo3} topic="Email Marketing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            beatae consequatur adipisicing.
          </ServiceCard>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
