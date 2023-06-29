import React from "react";
const PortfolioItem = ({ image, title, description }) => {
  return (
    <div className="portfolio-box">
      <img src={image} alt="portfolio" />
      <div className="portfolio-layer">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="#ViewProject" className="btn">
          <i className="bx bx-link-external"></i>
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
