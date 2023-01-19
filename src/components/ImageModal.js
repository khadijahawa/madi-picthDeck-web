import React, { useState, useEffect } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import styles from "../pages/style.module.css";
import info from "../assets/info.svg";
import cancel from "../assets/cancel.svg";

function ImageModal({ text, style }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      const modal = document.querySelector(".modal-backdrop");
      modal.addEventListener("click", () => setShowModal(false));
    }
  }, [showModal]);

  return (
    <div>
      <img
        src={info}
        alt="info"
        onClick={() => setShowModal(true)}
        // className={styles.infoIcon}
      />
      <Modal
        show={showModal}
        size="sm"
        backdrop="static"
        animation="false"
        fullscreen="false"
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
              <p style={{ color: "white" }} className="text-left">
                {text}
              </p>
            </Col>
          </Row>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default ImageModal;
