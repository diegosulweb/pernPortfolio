import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Navigation from "./components/NavBar";
import Homepage from "./components/Homepage";
import TodoPage from "./components/TodoPage";
import About from "./components/About";
import Word5Page from "./components/Word5";
import IssuesHandler from "./components/IssuesHandler";
import TestCss from "./components/TestCss";
function App() {
  return (
    <Router>
      <div className="allContent">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/word5" element={<Word5Page />} />
          <Route path="/issues" element={<IssuesHandler />} />
          <Route path="/about" element={<About />} />
          <Route path="/testcss" element={<TestCss />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
