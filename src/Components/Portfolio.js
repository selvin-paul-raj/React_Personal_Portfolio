import React from 'react';
import img3 from "../Images/Busness_Card.png"
import img4 from "../Images/Busness_Card1.png"
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">My <span>Portfolio</span></h2>
      <div className="portfolio-container">
        <PortfolioItem
          image={img3}
          title="Project 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias."
        />
        <PortfolioItem
          image={img4}
          title="Project 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias."
        />
        <PortfolioItem
          image={img3}
          title="Project 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias."
        />
        <PortfolioItem
          image={img4}
          title="Project 4"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias."
        />
        <PortfolioItem
          image={img3}
          title="Project 5"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias."
        />
        <PortfolioItem
          image={img4}
          title="Project 6"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias."
        />
      </div>
    </section>
  );
}

export default Portfolio;
