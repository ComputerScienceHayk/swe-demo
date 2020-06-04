import React, { Component } from "react";
import $ from "jquery";

//images
import GithubLogo from "../img/tools/github-logo.webp";
import GitlabLogo from "../img/tools/gitlab.webp";
import CodepenLogo from "../img/tools/codepen-icon.webp";
import Terminal from "../img/tools/terminal.webp";
import WindLogo from "../img/tools/wind.webp";
import LinuxLogo from "../img/tools/linux.webp";

class Tools extends Component {
  componentDidMount() {
    $("#githublogo").click(function () {
      $(".github").show();
      $(".gitlab").hide();
      $(".codepen").hide();
      $(".term").hide();
      $(".windows").hide();
      $(".linux").hide();
    });

    $("#gitlablogo").click(function () {
      $(".github").hide();
      $(".gitlab").show();
      $(".codepen").hide();
      $(".term").hide();
      $(".windows").hide();
      $(".linux").hide();
    });

    $("#codepenlogo").click(function () {
      $(".github").hide();
      $(".gitlab").hide();
      $(".codepen").show();
      $(".term").hide();
      $(".windows").hide();
      $(".linux").hide();
    });

    $("#terminallogo").click(function () {
      $(".github").hide();
      $(".gitlab").hide();
      $(".codepen").hide();
      $(".term").show();
      $(".windows").hide();
      $(".linux").hide();
    });

    $("#windowslogo").click(function () {
      $(".github").hide();
      $(".gitlab").hide();
      $(".codepen").hide();
      $(".term").hide();
      $(".windows").show();
      $(".linux").hide();
    });

    $("#linuxlogo").click(function () {
      $(".github").hide();
      $(".gitlab").hide();
      $(".codepen").hide();
      $(".term").hide();
      $(".windows").hide();
      $(".linux").show();
    });
  }
  render() {
    return (
      <div>
        <div className="tools" id="tools">
          <div className="tools-wrapper">
            <div className="dev-tools">
              <h4>Dev tools</h4>
              <div className="tools-items">
                <img id="githublogo" src={GithubLogo} alt="github" />
                <img id="gitlablogo" src={GitlabLogo} alt="gitlab" />
                <img id="codepenlogo" src={CodepenLogo} alt="codepen" />
                <img id="terminallogo" src={Terminal} alt="terminal" />
              </div>
            </div>
            <div className="OS">
              <h4>OS</h4>
              <div className="tools-items">
                <img id="windowslogo" src={WindLogo} alt="windows" />
                <img id="linuxlogo" src={LinuxLogo} alt="linux" />
              </div>
            </div>
          </div>
          <div className="tool-body">
            <div className="tool-content github">
              <iframe
                src="https://www.howtogeek.com/180167/htg-explains-what-is-github-and-what-do-geeks-use-it-for/"
                frameborder="0"
              ></iframe>
            </div>
            <div className="tool-content gitlab">
              <iframe
                src="https://about.gitlab.com/what-is-gitlab/"
                frameborder="0"
              ></iframe>
            </div>
            <div className="tool-content codepen">
              <iframe src="https://codepen.io/about/" frameborder="0"></iframe>
            </div>
            <div className="tool-content term">
              <iframe src="https://terminal.io/" frameborder="0"></iframe>
            </div>
            <div className="tool-content windows">
              <iframe
                src="https://www.padtinc.com/blog/five-basic-windows-10-computer-skills-every-engineer-should-know/"
                frameborder="0"
              ></iframe>
            </div>
            <div className="tool-content linux">
              <iframe
                src="https://dev.to/ajeet/linux-vs-windows-why-linux-is-better-for-programming-web-dev-a-newbie-experience-5eg1"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tools;
