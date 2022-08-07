import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Feauters,
  WhatGPT3,
  Header,
} from "./containers";
import { Brand, CTA, Feauter, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feauters />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};
export default App;
