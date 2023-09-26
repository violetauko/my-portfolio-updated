import React from "react";
import "./Portfolio.css";
import img2 from "../../images/port2.png";
import img1 from "../../images/port1.png";
import img6 from "../../images/port6.png";
import img4 from "../../images/port4.png";
import img5 from "../../images/port5.png";
import img3 from "../../images/port3.png";

const data = [
  {
    id: 1,
    image: img4,
    title: "Online Schools",
    github: "https://github.com/violetauko",
    demo: "https://violetauko.github.io/online-schools/",
  },
  {
    id: 2,
    image: img2,
    title: "Glass installation Service",
    github: "https://github.com/violetauko",
    demo: "https://violetauko.github.io/ohore-glass-mart/",
  },
  {
    id: 3,
    image: img6,
    title: "Delani Studio Replica",
    github: "https://github.com/violetauko",
    demo: "https://violetauko.github.io/Delani-Studio-Project/",
  },
  {
    id: 4,
    image: img1,
    title: "Pizza Delicacies",
    github: "https://github.com/violetauko",
    demo: "https://violetauko.github.io/Pizza-Delicacies/",
  },
  {
    id: 5,
    image: img5,
    title: "Dream Cars App",
    github: "https://github.com/violetauko",
    demo: "https://violetauko.github.io/dream-cars-app/",
  },
  {
    id: 6,
    image: img3,
    title: "Car Selling Website",
    github: "https://github.com/violetauko",
    demo: "https://violetauko.github.io/CarWebsite/",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target={"_blank"}>
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target={"_blank"}>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
