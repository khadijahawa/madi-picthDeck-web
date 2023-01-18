import React, { useState } from "react";
import ImageModal from "../components/ImageModal";
import { Link } from "react-router-dom";

import info from "../assets/info.png";
import home from "../assets/Home.png";
import logo from "../assets/logo.png";

import styles from "./style.module.css";

const Home = () => {
  return (
    <div className={styles.container} style={{ textAlign: "center" }}>
      <div>
        <img src={logo} className={styles.logo} />
        <p className={styles.digitalidtext}>
          This is your digital ID: 12435433
        </p>
      </div>
      <img src={home} style={{ width: "100%" }} />
      <div className={styles.info} style={{ justifyContent: "center" }}>
        <p className={styles.text}>This product is authenticated</p>
        <ImageModal text="this is my text" />
      </div>
      <h3 className={styles.customText}>Light Beige Turtleneck Sweater</h3>
      <p>250</p>
      <hr
        style={{
          // marginLeft: "3%",
          color: "black",
          backgroundColor: "black",
          height: 1,
          width: "100%"
        }}
      />
      <div className="col-md-12 text-center ">
        <div className="accordion" id="accordionExample">
          <div className={styles.HomeButtonSection}>
            <div id="headingOne" className={styles.HomeButtonText}>
              <Link to="/origin-story">
                <button
                  className={styles.HomeButton}
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Origin Story
                </button>
              </Link>
            </div>
            <div id="headingTow">
              <Link to="/care">
                <button
                  className={styles.HomeButton}
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Care
                </button>
              </Link>
            </div>
            <div id="headingThree">
              <Link to="/repair">
                <button
                  className={styles.HomeButton}
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Repair
                </button>
              </Link>
            </div>
            <div id="headingFour">
              <Link to="/resale">
                <button
                  className={styles.HomeButton}
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Resale
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
