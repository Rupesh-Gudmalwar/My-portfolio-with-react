import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "./components/app.css";

import Particle from "./components/Particle";
import Banner from "./components/banner";
import Social from "./components/social";

const App = () => {
  return (
    <BrowserRouter>
    
        <Particle />
        <Banner />
        <Social />

    </BrowserRouter>
  );
};

export default App;
