import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Care from "./pages/Care";
import Repair from "./pages/Repair";
import OriginStory from "./pages/OriginStory";
import Resale from "./pages/Resale";

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`App ${screenWidth < 600 ? "mobile" : "desktop"}`}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/care">
          <Care />
        </Route>
        <Route path="/repair">
          <Repair />
        </Route>
        <Route path="/origin-story">
          <OriginStory />
        </Route>
        <Route path="/resale">
          <Resale />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
