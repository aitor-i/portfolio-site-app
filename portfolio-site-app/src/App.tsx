import React from "react";
import "./App.css";
import { Wrapper } from "./App.styled";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import "./reset.css";
// import "./App.css";

function App() {
  return (
    <Wrapper>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
