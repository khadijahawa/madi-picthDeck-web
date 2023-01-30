import React, { useState } from "react";
import { Link } from "react-router-dom";
import vestiaire from "../assets/vestaire.svg";
import grailed from "../assets/grailed.svg";
import rerobe from "../assets/Rebebe.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Radio, Space } from "antd";
import home from "../assets/Home.png";
import ImageModal from "../components/ImageModal";
import CloudSvg from "../assets/CancelSvg.svg";

import styles from "./style.module.css";

function Resale() {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleContinue = () => {
    if (value === "option1") {
      window.location.href = "https://www.vestiairecollective.com/";
    } else if (value === "option2") {
      window.location.href = "https://rerobe.se/sv-SE";
    } else if (value === "option3") {
      window.location.href = "https://www.grailed.com/";
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
      <div
        className={styles.container}
        style={{
          padding: "5%"
        }}
      >
        <div
          className={styles.info}
          style={{
            justifyContent: "space-between",
            textAlign: "center",
            alignItems: "center",
            alignSelf: "center",
            width: "60%",
            // paddingTop: 7,
            // paddingBottom: 7,
            marginTop: 7,
            marginBottom: 7
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
          <div
            className={styles.customText}
            style={{
              fontSize: 24
            }}
          >
            Resale
          </div>
        </div>
        <p
          className={styles.customText}
          style={{
            fontFamily: "LexendSemiBold"
          }}
        >
          Interested In Selling Your Product?
        </p>
        <p
          style={{ fontFamily: "LexendLight", fontSize: 14, color: "#717171" }}
        >
          Here are some options for you!
        </p>
        <img src={home} style={{ width: "100%" }} alt="home" />
        <div>
          <Row>
            <Col xs={7}>
              <p
                style={{
                  color: "black",
                  fontFamily: "LexendLight",
                  fontWeight: 540,
                  fontSize: 16
                }}
              >
                Price you bought it for:
              </p>
            </Col>
            <Col
              xs={3}
              style={{
                marginLeft: "16%",
                fontFamily: "LexendRegular",

                color: "#717171"
              }}
            >
              <p className="text-end">250 €</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={4}>
              <p
                style={{
                  color: "black",
                  fontFamily: "LexendLight",
                  fontWeight: 540,
                  fontSize: 16
                }}
              >
                Date of purchase:
              </p>
            </Col>
            <Col
              xs={6}
              // sm={2}
              // m={4}
              style={{
                fontFamily: "LexendRegular",
                color: "#717171"
              }}
              className="text-end"
            >
              <p>2 December 2022</p>
            </Col>
          </Row>
        </div>
        <hr
          style={{
            backgroundColor: "black",
            height: 1,
            width: "100%"
          }}
        />
        <div style={{ width: "100%" }}>
          <Row
            className={styles.customText}
            style={{
              fontFamily: "LexendBold",
              fontSize: 18
            }}
            xs="auto"
          >
            <Col>
              <p>Resale options</p>
            </Col>
            <Col>
              <ImageModal
                text={
                  "1. Chose which resaler you wish to sell through.\n\n2. Be directed to their site where all your product information is there.\n\n3. Just enter its condition and it’s ready for sale."
                }
                style={{
                  top: "45%",
                  height: "45%",
                  width: "65%",
                  left: "32%",
                  padding: "2%",
                  alignItems: "center",
                  whiteSpace: "pre-line"
                }}
              />
            </Col>
          </Row>
          <Radio.Group
            onChange={handleChange}
            value={value}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row"
            }}
          >
            <Space direction="vertical">
              <Radio value="option1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={vestiaire}
                    style={{
                      marginLeft: 30,

                      marginRight: 10,
                      paddingRight: 10
                    }}
                    alt="vestiaire"
                  />
                  <p className="text-end" style={{ fontFamily: "Lexend" }}>
                    Est. resale price:{" "}
                    <span style={{ color: "#717171" }}>150€</span>
                    <br />
                    Your estimated commission:{" "}
                    <span style={{ color: "#717171" }}>85€</span>
                  </p>
                </div>
              </Radio>
              <Radio value="option2">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={rerobe}
                    style={{
                      marginLeft: 30,

                      marginRight: 10,
                      paddingRight: 10
                    }}
                    alt="rerobe"
                  />

                  <p className="text-end" style={{ fontFamily: "Lexend" }}>
                    Est. resale price:{" "}
                    <span style={{ color: "#717171" }}>150€</span>
                    <br /> Your estimated commission:{" "}
                    <span style={{ color: "#717171" }}>85€</span>
                  </p>
                </div>
              </Radio>
              <Radio value="option3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={grailed}
                    style={{
                      marginLeft: 30,
                      marginRight: 10,
                      paddingRight: 10
                    }}
                    alt="grailed"
                  />
                  <p className="text-end" style={{ fontFamily: "Lexend" }}>
                    Est. resale price:{" "}
                    <span style={{ color: "#717171" }}>150€</span>
                    <br /> Your estimated commission:{" "}
                    <span style={{ color: "#717171" }}>85€</span>
                  </p>
                </div>
              </Radio>
            </Space>
          </Radio.Group>
          <div style={{ padding: "1%", marginRight: "3%" }}>
            <button className={styles.HomeButton} onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resale;
