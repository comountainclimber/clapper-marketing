import React from "react";
import { motion } from "framer-motion";

import demo from "./demo.gif";
import logo from "./logo.svg";
import github from "./github.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="header-container">👏</div>

      <div id="clap-container">
        <motion.div transition={{ duration: 0.5 }} animate={{ scale: 0.5 }}>
          <span id="inner-clap-container" role="img" aria-label="clap">
            👏
          </span>
        </motion.div>
      </div>

      <div id="marketing-catch-phrase">
        <h2> "Show 👏 me 👏 your 👏 tax 👏 returns" </h2>
      </div>

      <div id="demo-container">
        <img src={demo} />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <footer>
        <div>© 2020 4thaboiz.com</div>

        <img src={github} />

        <div>Made with ❤️ on top of slack</div>
      </footer>
    </div>
  );
}

export default App;
