import React from "react";
import "./App.css";
import { Wrapper } from "./App.styled";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Home from "./pages/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";
import "./reset.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");

  worker.start();
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
