import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Care from "./pages/Care";
import Repair from "./pages/Repair";
import OriginStory from "./pages/OriginStory";
import Resale from "./pages/Resale";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/care" element={<Care />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/origin-story" element={<OriginStory />} />
        <Route path="/resale" element={<Resale />} />
      </Routes>
    </div>
  );
};

export default App;
