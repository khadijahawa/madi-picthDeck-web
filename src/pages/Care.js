import React from "react";
import { Link } from "react-router-dom";
import washing from "../assets/washing.svg";
import drying from "../assets/drying.png";
import extraCare from "../assets/extraCare.png";
import styles from "./style.module.css";
import CloudSvg from "../assets/CancelSvg.svg";

function Care() {
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
            width: "60%"
          }}
        >
          <Link to="/">
            <div
              style={{
                marginBottom: 12
              }}
            >
              <img src={CloudSvg} alt="cancel" />
            </div>
          </Link>
          <p
            className={styles.customText}
            style={{
              fontSize: 24
            }}
          >
            Care
          </p>
        </div>

        <div className={styles.container}>
          <p
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
          </p>
          <div className={styles.info} style={{ justifyContent: "flex-start" }}>
            <img
              src={washing}
              style={{
                margin: 4,
                marginBottom: 12,
                padding: 4
              }}
              alt="washing"
            />
            <p
              className={styles.customText}
              style={{
                fontSize: 18,
                alignSelf: "end",
                justifySelf: "flex-end"
              }}
            >
              &nbsp; Washing
            </p>
          </div>
          <p style={{ color: "#717171" }}>
            <br />
            Hand wash in cold water with wool/ cashmere detergent, or delicate
            cycle with cold water.
            <br />
          </p>
          <div className={styles.info} style={{ justifyContent: "flex-start" }}>
            <img src={drying} style={{ margin: 6, padding: 6 }} alt="cancel" />
            <p
              className={styles.customText}
              style={{
                fontSize: 18,
                alignSelf: "flex-end"
              }}
            >
              &nbsp; Drying
            </p>
          </div>
          <p style={{ color: "#717171" }}>
            <br />
            Lay flat on towel and roll to take out extra water, but don't ring
            out to dry. Roll back out & lay flat to dry on one side. You may
            need to flip the sweater to the other side after a few hours.
            <br />
          </p>
          <div className={styles.info} style={{ justifyContent: "flex-start" }}>
            <img
              src={extraCare}
              style={{ margin: 4, padding: 4 }}
              alt="cancel"
            />
            <p
              className={styles.customText}
              style={{
                fontSize: 18,
                alignSelf: "flex-end"
              }}
            >
              &nbsp; Extra Care
            </p>
          </div>
          <p style={{ color: "#717171" }}>
            After each wear, lay out to air out. Wool sweaters should not be
            laundered often (appx. every 6-10 wears) to last longer.Use a
            sweater comb to take off pilling. (edited)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Care;
