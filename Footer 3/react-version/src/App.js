import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";

const App = () => {
  return (
    <body>
      <header>
        <div class="logo">
          <img src={logo} alt="AI Club Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">
                [
                HOME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
              </a>
            </li>
            <li>
              <a class="home" href="#">
                ABOUT
              </a>
            </li>
            <li>
              <a class="home" href="#">
                PROJECT
              </a>
            </li>
            <li>
              <a class="home" href="#">
                MAGAZINE
              </a>
            </li>
            <li>
              <a class="home" href="#">
                EVENTS
              </a>
            </li>
          </ul>
        </nav>
        <div class="header-right">
          <span class="ask">ASK US ANYTHING</span>
          <div class="ask-us">
            <button>How to register in AI Conclave 25?</button>
          </div>
        </div>
      </header>
      <main>
        <div class="title">
          <h1>AI CLUB</h1>
        </div>
      </main>
      <footer>
        <div class="footer-content">
          <p>© 2024 AI Club - VIT Bhopal</p>
          <div class="links">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">GitHub</a>
            <a href="#">Discord</a>
          </div>
        </div>
        <p class="developed-by">Developed by Web Team '24</p>
      </footer>
    </body>
  );
};

export default App;
