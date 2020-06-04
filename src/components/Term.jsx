import React, { Component } from "react";
import $ from "jquery";

class Term extends Component {
  componentDidMount() {
    var prompt = {
      window: $(".window"),
      shortcut: $(".prompt-shortcut"),
      input: $(".js-prompt-input"),

      init: function () {
        $(".js-minimize").click(prompt.minimize);
        $(".js-maximize").click(prompt.maximize);
        $(".js-close").click(prompt.close);
        $(".js-open").click(prompt.open);
        prompt.input.focus();
        prompt.input.blur(prompt.focus);
      },
      focus: function () {
        prompt.input.focus();
      },
      minimize: function () {
        prompt.window.removeClass("window--maximized");
        prompt.window.toggleClass("window--minimized");
      },
      maximize: function () {
        prompt.window.removeClass("window--minimized");
        prompt.window.toggleClass("window--maximized");
        prompt.focus();
      },
      close: function () {
        prompt.window.addClass("window--destroyed");
        prompt.window.removeClass("window--maximized window--minimized");
        prompt.shortcut.removeClass("hidden");
        prompt.input.val("");
      },
      open: function () {
        prompt.window.removeClass("window--destroyed");
        prompt.shortcut.addClass("hidden");
        prompt.focus();
      },
    };
    $(document).ready(prompt.init);
  }
  render() {
    return (
      <React.Fragment>
        <section className="window">
          <header className="window-header">
            <nav className="window-controls">
              <span className="control-item control-minimize js-minimize">
                ‒
              </span>
              <span className="control-item control-maximize js-maximize">
                □
              </span>
              <span className="control-item control-close js-close">˟</span>
            </nav>
          </header>
          <main className="window-content">
            <div className="window-cursor">
              <span className="i-cursor-indicator">&gt;</span>
              <span className="i-cursor-underscore" />
              <input type="text" className="window-input js-prompt-input" />
            </div>
          </main>
        </section>
        <div className="prompt-shortcut i-prompt hidden js-open" />
      </React.Fragment>
    );
  }
}

export default Term;
