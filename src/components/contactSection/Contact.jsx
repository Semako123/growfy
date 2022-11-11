import React from "react";
import "./contact.css";
import Button from "../button/button";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-texts">
        <h2 className="contact-topic">
          Ready to start scaling your business now?
        </h2>
        <p className="contact-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          fuga error laudantium alias molestiae soluta nostrum saepe quaerat
          nisi.
        </p>
      </div>
          <div className="contact-buttons">
        <Button type="primary">Our services</Button>
        <Button type="secondary">Contact us</Button>
      </div>
    </div>
  );
};

export default Contact;
