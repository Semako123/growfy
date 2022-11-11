import React from "react";
import "./blog.css";
import SectionBadge from "../sectionBadge/SectionBadge";
import Button from "../button/button";
import BlogCard from "../blogCard/BlogCard";
import blogImage1 from "../assets/images/blog1.jpg";
import blogImage2 from "../assets/images/blog2.jpg";
import blogImage3 from "../assets/images/blog3.jpg";

const Blog = () => {
  return (
    <div className="blog-section">
      <SectionBadge>BLOG</SectionBadge>
      <h1 className="topic">Read our articles & news</h1>
      <div className="blog-para">
        <p className="details long">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sint ex
          omnibs ipsam officiis a error labore dignissimos accusantium
          necessitatibus eum velit optio, voluptatibus fuga? Aspernatur, modi.
          Magni, architecto laborum?
        </p>
        <div className="blog-para-button">
          <Button type="primary">All posts</Button>
        </div>
      </div>
      <div className="blog-cards-section">
        <BlogCard
          image={blogImage1}
          topic="How to Use Social Proof in Marketing"
          date="2022-09-04"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          sint voluptas asperiores aliquam cupiditate vero, blanditiis est
          error.
        </BlogCard>
        <BlogCard
          image={blogImage2}
          topic="Make a great first impression with these titles"
          date="2021-12-23"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          sint voluptas asperiores aliquam cupiditate vero, blanditiis est
          error.
        </BlogCard>
        <BlogCard
          image={blogImage3}
          topic="How to Grab Your Reader’s Attention"
          date="2020-04-01"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          sint voluptas asperiores aliquam cupiditate vero, blanditiis est
          error.
        </BlogCard>
        <BlogCard
          image={blogImage1}
          topic="How to Use Social Proof in Marketing"
          date="2022-09-04"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          sint voluptas asperiores aliquam cupiditate vero, blanditiis est
          error.
        </BlogCard>
      </div>
    </div>
  );
};

export default Blog;
