import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Navbar from "./components/Navbar";
import AnimationCanvas from "./components/AnimationCanvas";
import HeroTitle from "./components/HeroTitle";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import theme from "./styles/theme";
import "./App.css";

function App() {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#21132b";
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Navbar />
          <React.Suspense fallback={<div></div>}>
            <AnimationCanvas />
          </React.Suspense>
          <HeroTitle />
          <About />
          <Projects />
          <Experience id="experience" />
          <Contact />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
