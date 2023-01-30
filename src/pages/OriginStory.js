import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cancel from "../assets/CancelSvg.svg";
import originStory from "../assets/OriginStory.png";
import Cloud from "../assets/Cloud.svg";
import Drop from "../assets/Drop.svg";

import styles from "./style.module.css";

const OriginStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: "5%" }}>
      <div
        className={styles.info}
        style={{
          justifyContent: "space-between",
          width: "70%",
          paddingTop: 7,
          paddingBottom: 7,
          marginTop: 12,
          marginBottom: 12,
          textAlign: "center",
          alignItems: "center",
          alignSelf: "center"
        }}
      >
        <Link to="/">
          <div>
            <img src={cancel} alt="cancel" />
          </div>
        </Link>
        <div className={styles.pageHeaders}>Origin Story</div>
      </div>
      <img src={originStory} style={{ width: "100%" }} alt="originStory" />
      <div
        className={styles.container}
        style={{
          justifyContent: "center"
        }}
      >
        <p
          className={styles.pageHeaders}
          style={{
            fontSize: 22
          }}
        >
          <br />
          About The Fabric
          <br />
        </p>
        <p className={styles.customP}>
          This product is 100% wool. Wool is one of the most durable fabrics,
          with excellent body warming properties. It can last for generations if
          taken care of properly. <br />
          <br />
          RWS (Responsible Wool Standard)
        </p>
        <p
          className={styles.pageHeaders}
          style={{
            fontSize: 22
          }}
        >
          Product Journey
        </p>
        <p className={styles.customP}>
          This wool was responsibly sheared at a Gotland, Sweden sheep farm,
          where sheep are sheared twice per year. <br />
          The wool was spun by Hjelholts in Denmark and responsibly dyed in the
          U.K. with no hazardous chemicals. <br />
          This sweater was cut and sewn together by OK Babystrik in Denmark
          before it came to you. <br />
        </p>
        <p
          className={styles.pageHeaders}
          style={{
            fontSize: 22
          }}
        >
          Environmental Impact
        </p>
        <div className={styles.info}>
          <img src={Cloud} style={{ width: "8%", height: "8%" }} alt="cancel" />
          <p className={styles.customP}>
            &nbsp;10.5 kg of CO2 or 42 km driven.
          </p>
        </div>

        <div className={styles.info}>
          <img src={Drop} style={{ width: "8%", height: "8%" }} alt="cancel" />
          <p className={styles.customP}>&nbsp;Responsibly dyed</p>
        </div>
      </div>
    </div>
  );
};

export default OriginStory;
