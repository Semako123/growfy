import React from "react";
import "./blogCard.css";

const BlogCard = ({ topic, children, image, date }) => {
  const dateString = date;
  const dateObject = new Date(dateString);
  console.log(dateObject);
  return (
    <div className="blog-card">
      <img src={image} alt="blog1" className="blog-card-image" />
      <div className="blog-card-details">
        <p className="blog-card-date">{`${dateObject.toLocaleString("default", {
          month: "long",
        })} ${dateObject.getDate()}, ${dateObject.getFullYear()}`}</p>
        <h4 className="blog-card-topic">{topic}</h4>
        <p className="blog-card-para">{children}</p>
        <a href="https://google.com" rel="noreferrer" target="_blank">
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
