import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimationCanvas from "./components/AnimationCanvas";
import HeroTitle from "./components/HeroTitle";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const Main = styled.div``;

function App() {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#21132b";
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Main>
          <Navbar />
          <Suspense fallback={<div>...</div>}>
            <AnimationCanvas />
          </Suspense>
          <HeroTitle />
          <About />
          <Projects />
          <Experience id="experience" />
        </Main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
