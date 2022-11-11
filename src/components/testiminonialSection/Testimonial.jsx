import React from "react";
import "./testimonial.css";
import SectionBadge from "../sectionBadge/SectionBadge";
import Button from "../button/button";

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <SectionBadge>TESTIMONIALS</SectionBadge>
      <h1 className="topic long">See what our client says</h1>
      <div className="testimonial-para">
        <p className="details long">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit id
          doloribus in delectus porro praesentium quasi excepturi, explicabo
          omnis hic laudantium sed nam, doloremque, nihil iure suscipit qui et!
          Illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="testimonial-para-button">
          <Button type="primary">Get in touch</Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
