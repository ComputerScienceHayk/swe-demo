import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faBrain, faUserGraduate, faTools, faAddressCard, faProjectDiagram, faThList} from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

// images imports
import MyPic from "../img/hayk.webp";

import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Tools from "../components/Tools";
import Contact from "../components/Contact";

class SideBar extends Component {
  componentDidMount () {
    // mobile burger menu
    $( "#burger-button" ).click(function() {
      const HeaderMain = document.getElementById("header-main");
      const MainDiv = document.getElementById("main");
        if (HeaderMain.style.left === "-200px") {
          HeaderMain.style.left = "0px";
          HeaderMain.style.zIndex = "999";
          MainDiv.style.left = "200px";
        } else {
          HeaderMain.style.left = "-200px";
          MainDiv.style.left = "0px";
        }
    });
    
      const homecolor = document.getElementById("home-nav");
      const aboutcolor = document.getElementById("about-nav");
      const expcolor = document.getElementById("exp-nav");
      const portcolor = document.getElementById("port-nav");
      const skillscolor = document.getElementById("skill-nav");
      const toolscolor = document.getElementById("tool-nav");
      const contcolor = document.getElementById("cont-nav");

    $( "#home-nav" ).click(function() { 
      homecolor.classList.add("active");
      aboutcolor.classList.remove("active");
      expcolor.classList.remove("active");
      portcolor.classList.remove("active");
      skillscolor.classList.remove("active");
      toolscolor.classList.remove("active");
      contcolor.classList.remove("active");
    });
    $( "#about-nav" ).click(function() { 
      homecolor.classList.remove("active");
      aboutcolor.classList.add("active");
      expcolor.classList.remove("active");
      portcolor.classList.remove("active");
      skillscolor.classList.remove("active");
      toolscolor.classList.remove("active");
      contcolor.classList.remove("active");
    });
    $( "#exp-nav" ).click(function() { 
      homecolor.classList.remove("active");
      aboutcolor.classList.remove("active");
      expcolor.classList.add("active");
      portcolor.classList.remove("active");
      skillscolor.classList.remove("active");
      toolscolor.classList.remove("active");
      contcolor.classList.remove("active");
    });
    $( "#port-nav" ).click(function() { 
      homecolor.classList.remove("active");
      aboutcolor.classList.remove("active");
      expcolor.classList.remove("active");
      portcolor.classList.add("active");
      skillscolor.classList.remove("active");
      toolscolor.classList.remove("active");
      contcolor.classList.remove("active");
    });    
    $( "#skill-nav" ).click(function() { 
      homecolor.classList.remove("active");
      aboutcolor.classList.remove("active");
      expcolor.classList.remove("active");
      portcolor.classList.remove("active");
      skillscolor.classList.add("active");
      toolscolor.classList.remove("active");
      contcolor.classList.remove("active");
    });  
    $( "#tool-nav" ).click(function() { 
      homecolor.classList.remove("active");
      aboutcolor.classList.remove("active");
      expcolor.classList.remove("active");
      portcolor.classList.remove("active");
      skillscolor.classList.remove("active");
      toolscolor.classList.add("active");
      contcolor.classList.remove("active");
    }); 
    $( "#cont-nav" ).click(function() { 
      homecolor.classList.remove("active");
      aboutcolor.classList.remove("active");
      expcolor.classList.remove("active");
      portcolor.classList.remove("active");
      skillscolor.classList.remove("active");
      toolscolor.classList.remove("active");
      contcolor.classList.add("active");
    });
  }
  render (){
    return (
      <React.Fragment>
       
      
      <Route>
      <header>
        <div className="header-content">
          <div className="header-mobile">
            <a className="header-toggle">
              <i id="burger-button" className="fas fa-bars" />
            </a>
            <h2>SWE Hayk</h2>
          </div>
          <div id="header-main" className="header-main" data-simplebar>
            <div className="image-container">
              <h2 className="header-name">
                <p>SWE Hayk</p>
              </h2>
              <img className="profile-pic" src={MyPic} alt="profile-pic" />
            </div>
            <nav className="nav-menu">
              <ul>
                <li >
                  <Link id="home-nav" to="/" className="pt-link active">
                    <span className="nav-menu-icon">
                    <FontAwesomeIcon icon={faHome} style={{paddingRight: "5px"}}/>
                    </span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link id="about-nav" to="/about" className="pt-link">
                    <span className="nav-menu-icon">
                    <FontAwesomeIcon icon={faUser} style={{paddingRight: "5px"}} />
                    </span>
                    About Me
                  </Link>
                </li>
                <li>
                  <Link id="exp-nav" to="/experience" className="pt-link">
                    <span className="nav-menu-icon">
                    <FontAwesomeIcon icon={faThList} style={{paddingRight: "5px"}}/>
                    </span>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link id="port-nav" to="/portfolio" className="pt-link">
                    <span className="nav-menu-icon">
                    <FontAwesomeIcon icon={faProjectDiagram} style={{paddingRight: "5px"}}/>
                    </span>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link id="skill-nav" to="/skills" className="pt-link">
                    <span className="nav-menu-icon">
                    <FontAwesomeIcon icon={faBrain} style={{paddingRight: "5px"}}/>
                    </span>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link id="tool-nav" to="/tools" className="pt-link">
                    <span className="nav-menu-icon">
                    <FontAwesomeIcon icon={faTools} style={{paddingRight: "5px"}}/>
                    </span>
                    Tools
                  </Link>
                </li>
                <li>
                  <Link id="cont-nav" to="/contact" className="pt-link">
                    <span className="nav-menu-icon">
                    <FontAwesomeIcon icon={faAddressCard} style={{paddingRight: "5px"}}/>
                    </span>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="nav-footer">
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/computerscience.hayk?ref=bookmarks" target="_blank">
                    <i className="fab fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Compute96607118" target="_blank" >
                    <i className="fab fa-twitter-square" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/haikaz-bashoyan/" target="_blank" >
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.reddit.com/user/CSHayk" target="_blank" >
                    <i className="fab fa-reddit" />
                  </a>
                </li>
                <li>
                  <a href="https://vk.com/cshayk" target="_blank" >
                    <i className="fab fa-vk" />
                  </a>
                </li>
              </ul>
              <div className="copy">
                <p>
                  2020 © SWE Hayk
                  <br />
                  All Right Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      </Route>
      </React.Fragment>
    );
  }
}

export default SideBar;
