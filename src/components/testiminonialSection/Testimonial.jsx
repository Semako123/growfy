import React from "react";
import "./testimonial.css";
import SectionBadge from "../sectionBadge/SectionBadge";
import Button from "../button/button";
import profile1 from "../assets/images/prof1.jpg"
import profile2 from "../assets/images/prof2.jpg";
import profile3 from "../assets/images/prof3.jpg";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

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
      <div className="testimonial-cards-section">
        <TestimonialCard
          quote="I recommend this agency"
          name="John Doe"
          companyName="Company name"
          image={profile3}
          stars={5}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          voluptas, asperiores saepe hic nemo itaque dolor at ex voluptate?
          Quidem voluptatibus adipisci necessitatibus, aspernatur illum quia
          eius architecto quo possimus!
        </TestimonialCard>
        <TestimonialCard
          quote="The support is awesome"
          name="Alice Smith"
          companyName="Company name"
          image={profile2}
          stars={5}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          voluptas, asperiores saepe hic nemo itaque dolor at ex voluptate?
          Quidem voluptatibus adipisci necessitatibus, aspernatur illum quia
          eius architecto quo possimus!
        </TestimonialCard>
        <TestimonialCard
          quote="A game changer for us"
          name="Barry Smith"
          companyName="Company name"
          image={profile1}
          stars={5}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          voluptas, asperiores saepe hic nemo itaque dolor at ex voluptate?
          Quidem voluptatibus adipisci necessitatibus, aspernatur illum quia
          eius architecto quo possimus!
        </TestimonialCard>
      </div>
    </div>
  );
};

export default Testimonial;
