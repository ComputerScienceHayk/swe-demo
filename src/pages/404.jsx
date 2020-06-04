import React from "react";

class FZF extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="error-page">
          <div className="noise" />
          <div className="overlay" />
          <div className="error-terminal">
            <h1>
              Error <span className="errorcode">404</span>
            </h1>
            <p className="output">
              The page you are looking for might have been removed, had its name
              changed or is temporarily unavailable.
            </p>
            <p className="output">
              Please use navigation 
            </p>
            <p className="output">Good luck.</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FZF;
