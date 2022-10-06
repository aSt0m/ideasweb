import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/fidelity.png";
import Img2 from "../../assets/smartnet.png";
import Img3 from "../../assets/medipure.png";
import Img4 from "../../assets/evolution.png";
import Img5 from "../../assets/enlazze.png";
import Img6 from "../../assets/Bienes_raices.png";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Fidelity bots",
    github: "https://www.github.com",
    demo: "https://www.fidelitybots.com",
  },
  {
    id: 2,
    image: Img2,
    title: "SmartNet",
    github: "https://www.github.com",
    demo: "https://www.smartnet.network",
  },
  {
    id: 3,
    image: Img3,
    title: "Medipure",
    github: "https://www.github.com",
    demo: "https://medipureclinical.com/"
  },
  {
    id: 4,
    image: Img4,
    title: "EvolutionNetwork",
    github: "https://www.github.com",
    demo: "https://ast0m.github.io/evolution.network"
  },
  {
    id: 5,
    image: Img5,
    title: "Enlazze bots",
    github: "https://www.github.com",
    demo: "https://enlazze.net",
  },
  {
    id: 5,
    image: Img6,
    title: "Bienes Raices",
    github: "https://www.github.com",
    demo: "https://ast0m.github.io/Bienes-raices/index.html",
  },
];

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className="portolio__title">Sitios web recientes</h5>
      <h2 className="portfolio__subtitle">Portafolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key='id' className="portfolio__item">
              <div className="portfolio__item-image">
                <img className="portfolio__item-image-img" src={image} alt={title}  />
              </div>
              <h3 className="portfolio__item-title">
                {title}
              </h3>
              <div className="portfolio__item-cta">
                <a
                  className="portfolio__item-img btn"
                  href={github}
                >
                  github
                </a>
                <a
                  className="portfolio__item-img btn btn-primary"
                  href={demo}  target="_blank" rel="noopener noreferrer"
                >
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
