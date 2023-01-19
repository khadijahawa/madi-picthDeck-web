import React, { useState, useEffect } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import styles from "../pages/style.module.css";
import info from "../assets/info.png";
import cancel from "../assets/cancel.png";

function ImageModal({ text, style }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      const modal = document.querySelector(".modal-backdrop");
      modal.addEventListener("click", () => setShowModal(false));
    }
  }, [showModal]);
  const lines = text.split("\n");
  const formattedText = lines.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div>
      <img
        src={info}
        alt="info"
        onClick={() => setShowModal(true)}
        className={styles.infoIcon}
      />
      <Modal
        show={showModal}
        // onHide={() => setShowModal(false)}
        size="sm"
        backdrop="true"
        style={style}
      >
        <Modal.Header
          style={{
            backgroundColor: "#545454",
            borderRadius: 8,
            borderColor: "#545454"
          }}
        >
          <Row>
            <Col xs={2}>
              <img
                src={cancel}
                alt="cancel"
                onClick={() => setShowModal(false)}
                style={{ filter: "brightness(0) invert(1)" }}
                className={styles.cancelButton}
              />
            </Col>
            <Col xs={10}>
              <p
                style={{ color: "white" }}
                className={styles.breakLine}
                // dangerouslySetInnerHTML={{
                //   __html: text.replace(/\n/g, "<br/>")
                // }}
              >
                {formattedText}
              </p>
            </Col>
          </Row>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default ImageModal;
