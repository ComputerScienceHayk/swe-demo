import React, { Component } from "react";
import $ from "jquery";

class Contact extends Component {
  componentDidMount() {
    $("form").on("submit", (e) => {
      e.preventDefault();

      const email = $("#email").val().trim();
      const subject = $("#subject").val().trim();
      const text = $("#text").val().trim();

      const data = {
        email,
        subject,
        text,
      };
    });
    $(".name")
      .focus(function () {
        $(".name-help").slideDown(500);
      })
      .blur(function () {
        $(".name-help").slideUp(500);
      });

    $(".email")
      .focus(function () {
        $(".email-help").slideDown(500);
      })
      .blur(function () {
        $(".email-help").slideUp(500);
      });
  }

  render() {
    return (
      <section className="contact-section">
        <div className="wrapper">
          <h1 className="contact-me">Contact me</h1>
          <form className="form" method="post">
            <input
              type="text"
              id="subject"
              className="name"
              placeholder="Name"
            />
            <div>
              <p className="name-help">
                Please enter your first and last name.
              </p>
            </div>
            <input
              type="email"
              id="email"
              className="email"
              placeholder="Email"
            />
            <div>
              <p className="email-help">
                Please enter your current email address.
              </p>
            </div>
            <textarea
              id="text"
              cols={30}
              rows={10}
              placeholder="Hi Hayk, you’re cool, let’s work together. "
            />
            <input
              type="submit"
              className="submit wobble-vertical"
              defaultValue="Send"
            />
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
