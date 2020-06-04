import React, { Component } from "react";
import $ from "jquery";

class Contact extends Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <h2>We were not able to send an email</h2>
        <p>Please check the following</p>
        <ul>
          <li>
            A file named .env has created and has the same copy of the code from
            the .env-example file
          </li>
          <li>
            API KEY and DOMAIN obtained from Mailgun and replace from the
            codebase inside the .env file
          </li>
          <li>The receiver email has been authorized with MailGun</li>
          <li>You have replace all the TODO in the code base.</li>
        </ul>

        <p>If you've done all the above, please open a github issue</p>
      </React.Fragment>
    );
  }
}

export default Error;
