import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import styles from "../pages/style.module.css";
import info from "../assets/info.png";
import cancel from "../assets/cancel.png";

function ImageModal({ text, style }) {
  const [showModal, setShowModal] = useState(false);

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
        onHide={() => setShowModal(false)}
        size="sm"
        backdrop="static"
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
              <p style={{ color: "white" }}>{text}</p>
            </Col>
          </Row>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default ImageModal;
