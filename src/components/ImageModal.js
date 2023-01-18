import React, { useState } from "react";
import { Modal, Button, Icon } from "antd";
import styles from "../pages/style.module.css";
import info from "../assets/info.png";

function ImageModal({ text }) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleIconClick = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <div>
      <img
        src={info}
        alt="alt"
        onClick={() => setModalVisible(true)}
        className={styles.infoIcon}
      />
      <Modal
        title="Modal Title"
        open={modalVisible}
        onOk={handleIconClick}
        onCancel={handleIconClick}
        style={{ color: "#545454" }}
      >
        <p>{text}</p>
      </Modal>
    </div>
  );
}

export default ImageModal;
