import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/Home/HeroSection";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default App;
