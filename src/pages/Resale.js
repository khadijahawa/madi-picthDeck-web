import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div>
      <div
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
          <div className={styles.pageHeaders}>Resale</div>
        </div>
        <div className={styles.pageHeaders} style={{ fontSize: 16 }}>
          <br />
          Interested In Selling Your Product?
        </div>
        <div className={styles.customP}>Here are some options for you!</div>
        <img src={home} style={{ width: "100%" }} alt="home" />
        <div>
          <Row>
            <Col xs={7}>
              <div className={styles.resaleText}>Price you bought it for:</div>
            </Col>
            <Col
              xs={3}
              style={{
                marginLeft: "16%",
                fontFamily: "LexendRegular",

                color: "#717171"
              }}
            >
              <div className={`text-end ${styles.customP}`}>250 €</div>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={4}>
              <div className={styles.resaleText}>Date of purchase:</div>
            </Col>
            <Col xs={6}>
              <div className={`text-end ${styles.customP}`}>
                2 December 2022
              </div>
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
        <div
        // style={{
        //   width: "100%"
        // }}
        >
          <Row xs="auto">
            <Col>
              <p className={styles.pageHeaders} style={{ fontSize: 20 }}>
                Resale options
              </p>
            </Col>
            <Col style={{ paddingLeft: 10, marginRight: 20, margin: 1 }}>
              <ImageModal
                text={
                  "1. Chose which resaler you wish to sell through.\n\n2. Be directed to their site where all your product information is there.\n\n3. Just enter its condition and it’s ready for sale."
                }
                style={{
                  top: "35%",
                  // height: "45%",
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
              justifyContent: "space-evenly"
            }}
          >
            <Space direction="vertical">
              <Radio value="option1" style={{ marginLeft: 2 }}>
                <div
                  style={{
                    display: "flex",
                    gap: 20
                  }}
                >
                  <img
                    src={vestiaire}
                    style={{
                      // marginLeft: 10,
                      // marginRight: 10,
                      padding: 1
                    }}
                    alt="vestiaire"
                  />
                  <div
                    className={`text-end ${styles.resaleText}`}
                    style={{ fontSize: 11, marginLeft: 10 }}
                  >
                    Est. resale price:
                    <span
                      className={styles.customP}
                      style={{ fontWeight: 200 }}
                    >
                      150€
                    </span>
                    <br />
                    Your estimated commission:
                    <span
                      className={styles.customP}
                      style={{ fontWeight: 200 }}
                    >
                      85€
                    </span>
                  </div>
                </div>
              </Radio>
              <Radio value="option2" style={{ marginLeft: 2 }}>
                <div
                  style={{
                    display: "flex",
                    gap: 20
                  }}
                >
                  <img
                    src={rerobe}
                    style={{
                      // marginLeft: 10,
                      // marginRight: 10,
                      padding: 1
                    }}
                    alt="rerobe"
                  />

                  <div
                    className={`text-end ${styles.resaleText}`}
                    style={{ fontSize: 11, marginLeft: 10 }}
                  >
                    Est. resale price:
                    <span
                      className={styles.customP}
                      style={{ fontWeight: 200 }}
                    >
                      150€
                    </span>
                    <br />
                    Your estimated commission:
                    <span
                      className={styles.customP}
                      style={{ fontWeight: 200 }}
                    >
                      85€
                    </span>
                  </div>
                </div>
              </Radio>
              <Radio value="option3" style={{ marginLeft: 2 }}>
                <div
                  style={{
                    display: "flex",
                    gap: 20
                  }}
                >
                  <img
                    src={grailed}
                    style={{
                      // marginLeft: 10,
                      // marginRight: 10,
                      padding: 1
                    }}
                    alt="grailed"
                  />
                  <div
                    className={`text-end ${styles.resaleText}`}
                    style={{ fontSize: 11, marginLeft: 10 }}
                  >
                    Est. resale price:
                    <span
                      className={styles.customP}
                      style={{ fontWeight: 200 }}
                    >
                      150€
                    </span>
                    <br />
                    Your estimated commission:
                    <span
                      className={styles.customP}
                      style={{ fontWeight: 200 }}
                    >
                      85€
                    </span>
                  </div>
                </div>
              </Radio>
            </Space>
          </Radio.Group>
          <div style={{ padding: "1%", marginRight: "3%" }}>
            <button
              className={styles.HomeButton}
              onClick={handleContinue}
              style={{ marginTop: 9, marginBottom: 9 }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resale;
