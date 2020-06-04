import React, { useState, useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import work1 from "../img/works/work1.webp";
import work2 from "../img/works/work2.webp";
import temp1 from "../img/works/temp1.webp";
import temp2 from "../img/works/temp2.webp";
const portfolio = [
  {
    name: (
      <div className="portfolio-item">
        <div className="portfolio-item__wrapper">
          <div className="portfolio-item__demo">
            <img src={work1} />
            <span className="quick-view">
              <span className="quick-demo">
                <a href="https://nanekharatyan.com/" target="_blank">
                  <i className="fas fa-eye"></i>
                </a>
                <a
                  href="https://github.com/ComputerScienceHayk/simple-web-designer-portfolio"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </span>
            </span>
          </div>
          <div className="portfolio-item__title">
            <h2>Web designer portfolio-website</h2>
          </div>
        </div>
      </div>
    ),
    category: ["all", "frontend"],
  },
  {
    name: (
      <div className="portfolio-item">
        <div className="portfolio-item__wrapper">
          <div className="portfolio-item__demo">
            <img src={work2} />
            <span className="quick-view">
              <span className="quick-demo">
                {/* <a href="">
                  <i className="fas fa-eye"></i>
                </a> */}
                <a
                  href="https://github.com/ComputerScienceHayk/sales_list"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </span>
            </span>
          </div>
          <div className="portfolio-item__title">
            <h2>"Sales List" android/IOS app, coming soon</h2>
          </div>
        </div>
      </div>
    ),
    category: ["all", "mobile"],
  },
  {
    name: (
      <div className="portfolio-item">
        <div className="portfolio-item__wrapper">
          <div className="portfolio-item__demo">
            <img src={temp1} />
            <span className="quick-view">
              <span className="quick-demo">
                <a
                  href="https://computersciencehayk.github.io/travel-simple-template.github.io/"
                  target="_blank"
                >
                  <i className="fas fa-eye"></i>
                </a>
                <a
                  href="https://github.com/ComputerScienceHayk/travel-simple-template.github.io/tree/master"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </span>
            </span>
          </div>
          <div className="portfolio-item__title">
            <h2>"Travel" template</h2>
          </div>
        </div>
      </div>
    ),
    category: ["all", "others"],
  },
  {
    name: (
      <div className="portfolio-item">
        <div className="portfolio-item__wrapper">
          <div className="portfolio-item__demo">
            <img src={temp2} />
            <span className="quick-view">
              <span className="quick-demo">
                <a
                  href="https://computersciencehayk.github.io/company-simle-template.github.io/"
                  target="_blank"
                >
                  <i className="fas fa-eye"></i>
                </a>
                <a
                  href="https://github.com/ComputerScienceHayk/company-simle-template.github.io"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </span>
            </span>
          </div>
          <div className="portfolio-item__title">
            <h2>"Company" template</h2>
          </div>
        </div>
      </div>
    ),
    category: ["all", "others"],
  },
];

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    setTimeout(() => {
      const filtered = portfolio.map((port) => ({
        ...port,
        filtered: port.category.includes(filter),
      }));
      setProjects(filtered);
    }, 0);
  }, [filter]);

  // portfolio items

  return (
    <section className="portfolio">
      <div className="portfolio__labels">
        <a active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </a>
        <a active={filter === "frontend"} onClick={() => setFilter("frontend")}>
          WEB
        </a>
        <a active={filter === "mobile"} onClick={() => setFilter("mobile")}>
          Mobile
        </a>
        <a active={filter === "others"} onClick={() => setFilter("others")}>
          Templates
        </a>
      </div>
      <div className="portfolio__container">
        {projects.map((item) =>
          item.filtered === true ? <span key={item.name}>{item.name}</span> : ""
        )}
      </div>
    </section>
  );
}

export default Portfolio;
