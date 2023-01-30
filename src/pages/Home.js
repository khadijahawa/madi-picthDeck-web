import React from "react";
import { useNavigate } from "react-router-dom";

import ImageModal from "../components/ImageModal";
import home from "../assets/Home.png";
import logo from "../assets/logo.svg";
import styles from "./style.module.css";

const Home = () => {
  const history = useNavigate();

  const gottoCare = (e) => {
    e.preventDefault();

    history("/care");
  };
  const gottoRepair = (e) => {
    e.preventDefault();

    history("/repair");
  };
  const gottoResale = (e) => {
    e.preventDefault();

    history("/resale");
  };
  const gottoOriginStory = (e) => {
    e.preventDefault();

    history("/origin-story");
  };
  return (
    <div
      // className={styles.container}
      style={{ textAlign: "center", padding: "5%" }}
    >
      <div>
        <img src={logo} className={styles.logo} alt="althome" />
        <div className={styles.digitalidtext}>
          <p>This is your digital ID: 12435433</p>
        </div>
      </div>
      <img src={home} style={{ width: "100%" }} alt="althome" />
      <div className={styles.info} style={{ justifyContent: "center" }}>
        <p className={styles.text} style={{ marginRight: 4 }}>
          This product is authenticated
        </p>
        <ImageModal
          text="This product is authenticated by MĀDI."
          style={{
            top: "45%",
            width: "65%",
            left: "32%",
            padding: 2,
            alignItems: "center"
          }}
        />
      </div>
      <h3 className={styles.customText}>Light Beige Turtleneck Sweater</h3>
      <p className={styles.digitalidtext}>250 €</p>
      <hr
        style={{
          marginLeft: "2.5%",
          marginRight: "2%",
          padding: 0.5,
          color: "black",
          backgroundColor: "black",
          height: 1
          // width: "100%"
        }}
      />
      <div style={{ marginRight: 5 }}>
        <div className="accordion" id="accordionExample">
          <div className={styles.HomeButtonSection}>
            <div id="headingOne" className={styles.HomeButtonText}>
              <button className={styles.HomeButton} onClick={gottoOriginStory}>
                Origin Story
              </button>
            </div>
            <div id="headingTow">
              <button className={styles.HomeButton} onClick={gottoCare}>
                Care
              </button>
            </div>
            <div id="headingThree">
              <button className={styles.HomeButton} onClick={gottoRepair}>
                Repair
              </button>
            </div>
            <div id="headingFour">
              <button className={styles.HomeButton} onClick={gottoResale}>
                Resale
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
