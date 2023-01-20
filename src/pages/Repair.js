import React from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import location from "../assets/location.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CloudSvg from "../assets/CancelSvg.svg";
import styles from "./style.module.css";

function Repair() {
  return (
    <div>
      <div
        style={{ padding: "5%", paddingTop: "10%" }}
        className={styles.container}
      >
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
            Repair
          </p>
        </div>
        <p
          className={styles.customText}
          style={{
            fontFamily: "LexendSemiBold"
          }}
        >
          <br />
          Did you know?
        </p>
        <p
          style={{
            fontFamily: "LexendLight",
            color: "#717171"
          }}
        >
          Extending the life of a garment by 3 months can reduce carbon, waste
          and water footprints by 5-10%.
          <br />
          <br />
          We understand accidents can happen, That's why we want to help you
          prolong the life of your product, so we recommend a repair shop near
          you.
        </p>
      </div>
      <div className={styles.adressSection}>
        <div style={{ padding: "7%" }}>
          <Row xs="auto">
            <Col xs={1}>
              <img src={location} alt="cancel" />
            </Col>
            <Col xs={10}>
              <p
                // className={styles.customText}
                style={{
                  fontFamily: "LexendSemiBold",
                  fontSize: 16,
                  fontWeight: 600
                }}
                className="text-start"
              >
                &nbsp; Fix & Wear
              </p>
              <p
                style={{
                  fontFamily: "LexendLight",
                  fontSize: 14
                }}
                className="text-start"
              >
                &nbsp; Rådhusstræde 8, 1466 København
              </p>
            </Col>
          </Row>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Repair;
