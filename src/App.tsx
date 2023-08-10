import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import Projects from "./components/Projects/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <Router>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
