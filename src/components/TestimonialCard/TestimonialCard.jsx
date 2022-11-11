import React from "react";
import "./testimonialCard.css";
import star from "../assets/images/star.png";

const TestimonialCard = ({
  children,
  image,
  quote,
  name,
  companyName,
  stars,
}) => {
  const starsList = Array(stars).fill(" ");

  return (
    <div className="testimonial-card">
      <div className="testimonial-card-header">
        <img className="testimonial-card-profile" src={image} alt={name} />
        <div className="testimonial-card-header-texts">
          <p className="testimonial-card-name">{name}</p>
          <p className="testimonial-card-company-name">{companyName}</p>
        </div>
      </div>
      <h3 className="testimonial-card-quote">"{quote}" </h3>
      <p className="testimonial-card-detail">{children}</p>
      <div>
        {starsList.map((element, index) => (
          <img key={index} className="starIcon" src={star} alt="star" />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
