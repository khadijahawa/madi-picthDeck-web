import React, { useState } from "react";
import ImageModal from "../components/ImageModal";
import { Link } from "react-router-dom";

import info from "../assets/info.png";
import home from "../assets/Home.png";
import logo from "../assets/logo.png";

import styles from "./style.module.css";

const Home = () => {
  return (
    <div
      className={styles.container}
      style={{ textAlign: "center", padding: "5%" }}
    >
      <div>
        <img src={logo} className={styles.logo} />
        <div className={styles.digitalidtext}>
          <p>This is your digital ID: 12435433</p>
        </div>
      </div>
      <img src={home} style={{ width: "100%" }} />
      <div className={styles.info} style={{ justifyContent: "center" }}>
        <p className={styles.text}>This product is authenticated</p>
        <ImageModal text="this is my text" />
      </div>
      <h3 className={styles.customText}>Light Beige Turtleneck Sweater</h3>
      <p className={styles.digitalidtext}>250 €</p>
      <hr
        style={{
          marginLeft: "2.5%",
          color: "black",
          backgroundColor: "black",
          height: 1,
          width: "100%"
        }}
      />
      <div>
        <div className="accordion" id="accordionExample">
          <div className={styles.HomeButtonSection}>
            <div id="headingOne" className={styles.HomeButtonText}>
              <Link to="/origin-story">
                <button className={styles.HomeButton}>Origin Story</button>
              </Link>
            </div>
            <div id="headingTow">
              <Link to="/care">
                <button className={styles.HomeButton}>Care</button>
              </Link>
            </div>
            <div id="headingThree">
              <Link to="/repair">
                <button className={styles.HomeButton}>Repair</button>
              </Link>
            </div>
            <div id="headingFour">
              <Link to="/resale">
                <button className={styles.HomeButton}>Resale</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
