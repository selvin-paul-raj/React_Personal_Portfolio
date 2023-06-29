import React from "react";
import img2 from "../Images/2.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={img2} alt="profile" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Frontend Developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel
          sed fuga incidunt a reiciendis ducimus debitis?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nihil, debitis Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Reiciendis, repellat.
        </p>
        <a href="#read_more" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
