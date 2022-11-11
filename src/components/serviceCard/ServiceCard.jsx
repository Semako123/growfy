import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ children, logo, topic }) => {
  return (
    <div className="service-card">
      <div>
        <img src={logo} alt="growfy" className="service-card-logo" />
      </div>
      <p className="service-card-topic">{topic}</p>
      <p className="service-card-text">{children}</p>
    </div>
  );
};

export default ServiceCard;
