import React from "react";
import "./ratings.css";
import RatingsCard from "../ratingsCard/RatingsCard";
import bg0 from "../assets/images/bg7.jpg"

const Ratings = () => {
  return (
    <div className="ratings-section">
      <div className="rating-card-grid">
        <RatingsCard heading="1.2M+">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          optio accusantium quae velit excepturi fuga ea at molestias recusandae
          dolor.
        </RatingsCard>
        <RatingsCard heading="3.4B">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          optio accusantium quae velit excepturi fuga ea at molestias recusandae
          dolor.
        </RatingsCard>
      </div>
      <div className="rating-card-grid">
        <RatingsCard heading="98%">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          optio accusantium quae velit excepturi fuga ea at molestias recusandae
          dolor.
        </RatingsCard>
        <RatingsCard heading="10+">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          optio accusantium quae velit excepturi fuga ea at molestias recusandae
          dolor.
        </RatingsCard>
      </div>
      <div className="rating-image-div">
        <img className="rating-image" src={bg0} alt="growfy" />
      </div>
    </div>
  );
};

export default Ratings;
