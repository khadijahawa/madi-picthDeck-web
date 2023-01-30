import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import location from "../assets/location.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CloudSvg from "../assets/CancelSvg.svg";
import styles from "./style.module.css";

function Repair() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div style={{ padding: "5%", paddingTop: "10%" }}>
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
                marginBottom: 4
              }}
            >
              <img src={CloudSvg} alt="cancel" />
            </div>
          </Link>
          <div className={styles.pageHeaders}>Repair</div>
        </div>
        <p className={styles.pageHeaders} style={{ fontSize: 22 }}>
          <br />
          Did you know?
        </p>
        <p className={styles.customP}>
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
              <div
                className={styles.pageHeaders}
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 4
                }}
                // className="text-start"
              >
                &nbsp; Fix & Wear
              </div>
              <p
                className={styles.customP}
                style={{
                  fontSize: 14
                }}
                // className="text-start"
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
