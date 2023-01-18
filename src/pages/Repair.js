import React from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import location from "../assets/location.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import cancel from "../assets/cancelScreen.png";
import styles from "./style.module.css";

function Repair() {
  return (
    <Container>
      <div style={{ padding: "1%", margin: "2%" }}>
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
              <img src={cancel} />
            </div>
          </Link>
          <p
            className={styles.customText}
            style={{
              fontSize: 24
            }}
            // style={[
            //   styles.customText,
            //   {
            //     fontFamily: "LexendBold",
            //     fontSize: 22,
            //     lineHeight: 90,
            //     right: "25%"
            //   }
            // ]}
          >
            Repair
          </p>
        </div>
        <p
          className={styles.customText}
          style={{
            fontFamily: "LexendSemiBold",
            fontSize: 24
          }}
        >
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
          you."
        </p>
        <div className={styles.adressSection} style={{ padding: 10 }}>
          <Row xs="auto">
            <Col>
              <img src={location} />
            </Col>
            <Col>
              <p
                className={styles.customText}
                style={{
                  fontFamily: "LexendSemiBold",
                  fontSize: 16,
                  fontWeight: 600
                }}
              >
                &nbsp; Fix & Wear
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
                &nbsp; Rådhusstræde 8, 1466 København
              </p>
            </Col>
          </Row>
          <Map />
        </div>
      </div>
    </Container>
  );
}

export default Repair;
