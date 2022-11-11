import React from "react";
import "./ratingsCard.css";

const RatingsCard = ({ heading, children }) => {
  return (
    <div className="ratings-card">
      <h3 className="ratings-card-heading">{heading}</h3>
      <p className="ratings-card-details">{children}</p>
    </div>
  );
};

export default RatingsCard;
