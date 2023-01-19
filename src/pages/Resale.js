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

  const onClick = (e) => {
    setValue(e.target.value);
    const selectedValue = e.target.value;

    if (selectedValue === "option1") {
      window.location.href = "https://www.vestiairecollective.com/";
    } else if (selectedValue === "option2") {
      window.location.href = "https://rerobe.se/sv-SE";
    } else if (selectedValue === "option3") {
      window.location.href = "https://www.grailed.com/";
    }
  };
  return (
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
          Resale
        </p>
      </div>
      <p
        className={styles.customText}
        style={{
          fontFamily: "LexendBold",
          fontSize: 16
        }}
      >
        Interested in selling your Product?
      </p>
      <p style={{ fontFamily: "LexendLight", fontSize: 14, color: "#717171" }}>
        Here are some options for you!
      </p>
      <img src={home} style={{ width: "100%" }} alt="home" />
      <div>
        <Row>
          <Col xs={6}>
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
            xs={2}
            style={{
              marginLeft: "16%",
              fontFamily: "LexendRegular",

              color: "#717171"
            }}
          >
            <p style={{ alignSelf: "flex-start" }}>250 €</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
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
            xs={5}
            m={2}
            style={{
              marginLeft: "16%",
              fontFamily: "LexendRegular",
              color: "#717171"
            }}
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
              text="1.Chose which resaler you wish to sell through. &nbsp;
               2.Be directed to their site where all your product information is there. &nbsp; &nbsp;  3. Just enter its condition and it’s ready for sale. &nbsp; &nbsp; &nbsp; "
              style={{
                top: "45%",
                height: "45%",
                width: "65%",
                left: "32%",
                padding: 2,
                alignItems: "center"
              }}
            />
          </Col>
        </Row>
        <Radio.Group
          onChange={onClick}
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
                <p>
                  Est. resale price: 150€
                  <br />
                  Your estimated commission: 85€
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

                <p>
                  Est. resale price: 150€
                  <br /> Your estimated commission: 85€
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
                <p>
                  Est. resale price: 150€
                  <br /> Your estimated commission: 85€
                </p>
              </div>
            </Radio>
          </Space>
        </Radio.Group>
        <div style={{ padding: "1%", marginRight: "3%" }}>
          <Link to="/">
            <button
              className={styles.HomeButton}
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Resale;
