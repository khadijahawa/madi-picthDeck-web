import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import washing from "../assets/washing.png";
import drying from "../assets/drying.png";
import extraCare from "../assets/extraCare.png";
import styles from "./style.module.css";
import CloudSvg from "../assets/CancelSvg.svg";

function Care() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container} style={{ padding: "5%" }}>
        <div
          className={styles.info}
          style={{
            justifyContent: "space-between",
            textAlign: "center",
            alignItems: "center",
            alignSelf: "center",
            width: "57%"
          }}
        >
          <Link to="/">
            <div style={{ marginBottom: 4 }}>
              <img src={CloudSvg} alt="cancel" />
            </div>
          </Link>
          <div
            className={styles.customText}
            style={{
              fontSize: 24
            }}
          >
            Care
          </div>
        </div>

        <div className={styles.container}>
          <div
            className={styles.customText}
            style={{
              fontFamily: "LexendBold",
              fontSize: 20
            }}
          >
            <br />
            How To Take Care Of Your Garment
            <br />
            <br />
          </div>
          <div className={styles.info}>
            <img src={washing} alt="washing" />
            <div
              className={styles.customText}
              style={{
                fontSize: 18,
                alignSelf: "flex-start"
              }}
            >
              &nbsp; Washing
            </div>
          </div>
          <p style={{ color: "#717171" }}>
            <br />
            Hand wash in cold water with wool/ cashmere detergent, or delicate
            cycle with cold water.
            <br />
          </p>
          <div className={styles.info}>
            <img src={drying} alt="cancel" />
            <div
              className={styles.customText}
              style={{
                fontSize: 18
              }}
            >
              &nbsp; Drying
            </div>
          </div>
          <p style={{ color: "#717171" }}>
            <br />
            Lay flat on towel and roll to take out extra water, but don't ring
            out to dry. Roll back out & lay flat to dry on one side. You may
            need to flip the sweater to the other side after a few hours.
            <br />
          </p>
          <div className={styles.info}>
            <img src={extraCare} alt="cancel" />
            <div
              className={styles.customText}
              style={{
                fontSize: 18
              }}
            >
              &nbsp; Extra Care
            </div>
          </div>
          <p style={{ color: "#717171" }}>
            <br />
            After each wear, lay out to air out. Wool sweaters should not be
            laundered often (appx. every 6-10 wears) to last longer.Use a
            sweater comb to take off pilling. (edited)
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Care;
