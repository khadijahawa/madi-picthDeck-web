import React from "react";
import { Link } from "react-router-dom";
import cancel from "../assets/CancelSvg.svg";
import originStory from "../assets/OriginStory.png";
import Cloud from "../assets/Cloud.svg";
import Drop from "../assets/Drop.svg";

import styles from "./style.module.css";

const OriginStory = () => {
  return (
    <div style={{ padding: "5%" }}>
      <div
        className={styles.info}
        style={{
          justifyContent: "space-between",
          width: "70%"
        }}
      >
        <Link to="/">
          <div
            style={{
              marginBottom: 12
            }}
          >
            <img src={cancel} alt="cancel" />
          </div>
        </Link>
        <p
          className={styles.customText}
          style={{
            fontSize: 24
          }}
        >
          Origin Story
        </p>
      </div>
      <img src={originStory} style={{ width: "100%" }} alt="cancel" />
      <div
        className={styles.container}
        style={{
          justifyContent: "center"
        }}
      >
        <p
          className={styles.customText}
          style={{
            fontFamily: "LexendSemiBold",
            fontSize: 22
          }}
        >
          <br />
          About the fabric
          <br />
        </p>
        <p
        // style={[
        //   styles.customText,
        //   {
        //     fontFamily: "LexendLight",
        //     fontSize: 14
        //   }
        // ]}
        >
          This product is 100% wool. Wool is one of the most durable fabrics,
          with excellent body warming properties. It can last for generations if
          taken care of properly. <br />
          <br />
          RWS (Responsible Wool Standard)
        </p>
        <p
          className={styles.customText}
          style={{
            fontFamily: "LexendSemiBold",
            fontSize: 22
          }}
        >
          Product journey
        </p>
        <p
        // style={[
        //   styles.customText,
        //   {
        //     fontFamily: "LexendLight",
        //     fontSize: 14
        //   }
        // ]}
        >
          This wool was responsibly sheared at a Gotland, Sweden sheep farm,
          where sheep are sheared twice per year. <br />
          The wool was spun by Hjelholts in Denmark and responsibly dyed in the
          U.K. with no hazardous chemicals. <br />
          This sweater was cut and sewn together by OK Babystrik in Denmark
          before it came to you. <br />
        </p>
        <p
          className={styles.customText}
          style={{
            fontFamily: "LexendSemiBold",
            fontSize: 22
          }}
        >
          Environmental impact
        </p>
        <div className={styles.info}>
          <img src={Cloud} style={{ width: "8%", height: "8%" }} alt="cancel" />
          <p>&nbsp;10.5 kg of CO2 or 42 km driven.</p>
        </div>

        <div className={styles.info}>
          <img src={Drop} style={{ width: "8%", height: "8%" }} alt="cancel" />
          <p>&nbsp;Responsibly dyed</p>
        </div>
      </div>
    </div>
  );
};

export default OriginStory;
