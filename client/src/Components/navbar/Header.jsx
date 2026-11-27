import React from "react";
import "../styles/Header.css";

function Header() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section class="navbar custom-navbar navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
            </button>
          </div>

          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li>
                <a href="#home" onClick={scrollToTop}>Home</a>
              </li>
              <li>
                <a href="#feature">Features</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
