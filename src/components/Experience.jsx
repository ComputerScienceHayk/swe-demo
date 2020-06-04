import React, { Component } from "react";

import SalesLogo from "../img/sl-logo.webp";

class Experience extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="experience">
        <div className="wrapper">
          <div className="center-div">
            <div className="flip flip-vertical">
              <div className="front">
                <p className="elegantshadow">Freelance</p>
              </div>
              <div className="back">
                <div className="exp_info">
                  <p className="exp_time">June 2018 - Present</p>
                  <p className="exp_desc">
                    I helped my friends with little web programming problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="flip flip-vertical">
              <div className="front">
                <img src={SalesLogo} alt="Sales List" />
              </div>
              <div className="back">
                <div className="exp_info">
                  <p className="exp_time">June 2019 - Present</p>
                  <p className="exp_desc">
                  In 2019, I met the aspiring entrepreneur Gor Geghamyan
                   and me and a small team started to make front-end for his web app,
                    and then I moved to mobile development and still develop the start applications 
                    for up "Sales List".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
