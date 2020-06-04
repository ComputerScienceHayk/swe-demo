import React, { Component } from "react";

//images
import HtmlLogo from "../img/skills/html5.webp";
import CssLogo from "../img/skills/css.webp";
import LessLogo from "../img/skills/less.webp";
import JsLogo from "../img/skills/js.webp";
import ReactLogo from "../img/skills/react.webp";
import NodeLogo from "../img/skills/node.webp";
import ExpressLogo from "../img/skills/express.webp";
import MongoLogo from "../img/skills/mongo.webp";
import LearnLogo from "../img/skills/learn.webp";
import RespLogo from "../img/skills/respons.webp";
import EmathyLogo from "../img/skills/emathy.webp";
import EnthusLogo from "../img/skills/enthus.webp";
import TeamWorkLogo from "../img/skills/teamwork.webp";
import SolveLogo from "../img/skills/solve.webp";

class Skills extends Component {
  componentDidMount() {}

  render() {
    return (
      <section className="skills" id="skills">
        <div className="skills_body">
          <div className="hard_skills">
            <div className="hard_skills_top">
              <div className="flex_center_center">
                <div className="skill_type_wrapper">
                  <h3>HARD SKILLS</h3>
                  <div className="skills_underline" />
                </div>
              </div>
            </div>
            <div className="hard_skills_bottom">
              <div className="hard_skills_bottom_line1">
                <div className="skill_item">
                  <img src={HtmlLogo} alt="html5" style={{ width: "50%" }} />
                  <p>HTML5</p>
                </div>
                <div className="skill_item">
                  <img src={CssLogo} alt="CSS3" style={{ width: "50%" }} />
                  <p>CSS3</p>
                </div>
                <div
                  style={{ justifyContent: "space-evenly" }}
                  className="skill_item"
                >
                  <img src={LearnLogo} alt="less" style={{ width: "66%" }} />
                  <p>less</p>
                </div>
              </div>
              <div className="hard_skills_bottom_line2">
                <div className="skill_item">
                  <img src={JsLogo} alt="JS" width="50%" />
                  <p>JavaScript</p>
                </div>
                <div className="skill_item">
                  <img src={ReactLogo} alt="react" width="60%" />
                  <p>React JS</p>
                </div>
              </div>
              <div className="hard_skills_bottom_line3">
                <div className="skill_item">
                  <img src={NodeLogo} alt="node" width="80%" />
                  <p>Node JS</p>
                </div>
                <div
                  style={{ justifyContent: "space-evenly" }}
                  className="skill_item"
                >
                  <img src={ExpressLogo} alt="express" width="80%" />
                  <p>Express</p>
                </div>
                <div
                  style={{ justifyContent: "space-evenly" }}
                  className="skill_item"
                >
                  <img src={MongoLogo} alt="mongo" style={{ width: "90%" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="skills_partition"></div>
          <div className="soft_skills">
            <div className="soft_skills_top">
              <div className="flex_center_center">
                <div className="skill_type_wrapper">
                  <h3>SOFT SKILLS</h3>
                  <div className="skills_underline" />
                </div>
              </div>
            </div>
            <div className="soft_skills_bottom">
              <div className="soft_skills_bottom_line1">
                <div className="soft_item">
                  <img src={LearnLogo} width="77%" alt="learnability" />
                  <p>Learnability</p>
                </div>
                <div className="soft_item">
                  <img src={RespLogo} width="70%" alt="responsability" />
                  <p>Responsability</p>
                </div>
                <div className="soft_item">
                  <img src={EmathyLogo} width="80%" alt="empathy" />
                  <p>Empathy</p>
                </div>
              </div>
              <div className="soft_skills_bottom_line2">
                <div className="soft_item">
                  <img src={EnthusLogo} width="70%" alt="enthusiasm" />
                  <p>Enthusiasm</p>
                </div>
                <div className="soft_item">
                  <img src={TeamWorkLogo} width="80%" alt="Teamwork" />
                  <p>Teamwork</p>
                </div>
                <div className="soft_item">
                  <img src={SolveLogo} width="82%" alt="Problem Solving" />
                  <p>Problem Solving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
