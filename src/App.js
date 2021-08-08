import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimationCanvas from "./components/AnimationCanvas";
import HeroTitle from "./components/HeroTitle";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#21132b";
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Navbar />
          <Suspense fallback={<div>...</div>}>
            <AnimationCanvas />
          </Suspense>
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
