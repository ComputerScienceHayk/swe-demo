import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import Typewriter from "typewriter-effect";

import Github from "../img/tools/github-logo.webp";
const closeOpenTerminal = () => {
  const terminalInner = document.getElementById("bioTerm");
  if (terminalInner.style.display === "none") {
    terminalInner.style.display = "block";
  } else {
    terminalInner.style.display = "none";
  }
}
function About() {
  const bioInfo = [
    ">> Hi I'm SWE(Software Engineer ) Hayk<br/>",
    ">> My passion is to create something from scratch. <br/>",
    ">> I study continuously. <br/>",
    ">> If you want to know more, contact me, I will answer. ",
  ];
  return (
    <div className="about-inner">
      <div id="desktop" className="desktop">
        {/* <Draggable>
            <div className="folder-inner">
              <div className="thumbnail">
                <span className="folder">
                  <span className="file">
                    <img id="git-golder-logo" src={Github} alt="" />
                  </span>
                </span>
              </div>
            </div>
          </Draggable> */}

        {/* <Draggable>
            <div className="folder-inner">
              <div className="thumbnail">
                <span className="folder">
                  <span className="file">
                    <i className="fas fa-file"></i>
                  </span>
                </span>
              </div>
            </div>
          </Draggable> */}

        <Draggable>
          <div id="bioTerm" className="terminal">
            <div className="term_top">
              <div />
              <div className="cmm">
                <div className="close control-close">˟</div>
                <div className="min control-minimize">‒</div>
                <div className="max control-maximize">□</div>
              </div>
              <div className="machine-name">swe@hayk:~$</div>
              <div />
            </div>
            <div className="term_body js-prompt-input" id="term_body">
              <Typewriter
                onInit={(typewriter) => {
                  for (let i = 0; i < bioInfo.length; i++) {
                    typewriter.typeString(bioInfo[i]).pauseFor(2000).start();
                  }
                }}
                options={{
                  autoStart: false,
                }}
              />
            </div>
          </div>
        </Draggable>
      </div>
      <div className="desktop-panel">
        <div onClick={closeOpenTerminal} className="prompt-shortcut i-prompt js-open"></div>
      </div>
    </div>
  );
}

export default About;
