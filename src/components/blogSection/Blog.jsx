import React from "react";
import "./blog.css";
import SectionBadge from "../sectionBadge/SectionBadge";
import Button from "../button/button";
import BlogCard from "../blogCard/BlogCard";
import blogImage1 from "../assets/images/blog1.jpg";
import blogImage2 from "../assets/images/blog2.jpg";
import blogImage3 from "../assets/images/blog3.jpg";
import blogImage4 from "../assets/images/blog4.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Blog = () => {
  return (
    <div className="blog-section">
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        animateOut="animate__fadeOutLeft"
        offset={30}
      >
        <SectionBadge>BLOG</SectionBadge>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        animateOut="animate__fadeOutLeft"
      >
        <h1 className="topic">Read our articles & news</h1>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        animateOut="animate__fadeOutLeft"
      >
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
      </AnimationOnScroll>
      <div className="blog-cards-section">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
          delay={100}
        >
          <BlogCard
            image={blogImage1}
            topic="How to Use Social Proof in Marketing"
            date="2022-09-04"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sint voluptas asperiores aliquam cupiditate vero, blanditiis est
            error.
          </BlogCard>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
          delay={200}
        >
          <BlogCard
            image={blogImage2}
            topic="Make a great first impression with these titles"
            date="2021-12-23"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sint voluptas asperiores aliquam cupiditate vero, blanditiis est
            error.
          </BlogCard>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
          delay={300}
        >
          <BlogCard
            image={blogImage3}
            topic="How to Grab Your Reader’s Attention"
            date="2020-04-01"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sint voluptas asperiores aliquam cupiditate vero, blanditiis est
            error.
          </BlogCard>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
          delay={400}
        >
          <BlogCard
            image={blogImage4}
            topic="Digital Marketing - All you need to know"
            date="2022-12-11"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sint voluptas asperiores aliquam cupiditate vero, blanditiis est
            error.
          </BlogCard>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Blog;
