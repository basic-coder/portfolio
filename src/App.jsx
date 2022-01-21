import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./containers/home/Home";
import Footer from "./components/footer/Footer";
import Contact from "./containers/contact/Contact";
import "./App.css";
import { About } from "./containers/about/About";
import Project from "./containers/project/Project";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";

const App = () => {
 
  return (
    <div className="main">
      <div className="bg-circles">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
      </div>
      <Navbar />     
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/card" element={<Card />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
