import React from "react";
import "./ratings.css";
import RatingsCard from "../ratingsCard/RatingsCard";
import bg0 from "../assets/images/bg7.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Ratings = () => {
  return (
    <div className="ratings-section">
      <div className="rating-card-grid">
        <AnimationOnScroll
          animateIn="animate__bounceIn"
          animateOut="animate__bounceOut"
          style={{ marginBottom: "10px" }}
        >
          <RatingsCard heading="1.2M+">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            optio accusantium quae velit excepturi fuga ea at molestias
            recusandae dolor.
          </RatingsCard>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__bounceIn"
          animateOut="animate__bounceOut"
          style={{ marginBottom: "10px" }}
        >
          <RatingsCard heading="3.4B">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            optio accusantium quae velit excepturi fuga ea at molestias
            recusandae dolor.
          </RatingsCard>
        </AnimationOnScroll>
      </div>
      <div className="rating-card-grid">
        <AnimationOnScroll
          animateIn="animate__bounceIn"
          animateOut="animate__bounceOut"
          style={{ marginBottom: "10px" }}
        >
          <RatingsCard heading="98%">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            optio accusantium quae velit excepturi fuga ea at molestias
            recusandae dolor.
          </RatingsCard>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__bounceIn"
          animateOut="animate__bounceOut"
          style={{ marginBottom: "10px" }}
        >
          <RatingsCard heading="10+">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            optio accusantium quae velit excepturi fuga ea at molestias
            recusandae dolor.
          </RatingsCard>
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll
        animateIn="animate__bounceIn"
        animateOut="animate__bounceOut"
      >
        <div className="rating-image-div">
          <img className="rating-image" src={bg0} alt="growfy" />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Ratings;
