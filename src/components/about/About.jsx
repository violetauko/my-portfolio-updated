import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FcCollaboration } from "react-icons/fc";
import { VscFolderLibrary } from "react-icons/vsc";
import myImage3 from "../../images/myImage3.jpg";
const About = () => {
  return (
    <section id="about">
      <h4>Get to Know</h4>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage3} alt="myImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FcCollaboration className="about__icon" />
              <h5>Collaborations</h5>
              <small>10+ Projects</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>25+ Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            commodi facilis aut provident ullam cum accusamus quo, itaque dicta
            nihil corporis architecto hic molestiae voluptate illum laudantium
            voluptas recusandae. Pariatur.
          </p>

          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
