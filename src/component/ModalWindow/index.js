import React from "react";
import { Modal, Input } from "antd";

const ModalWindow = ({
  handleOk,
  handleCancel,
  changeModalValue,
  selectedTodoItem,
  isModal
}) => {
  return (
    <Modal
      title="Basic Modal"
      visible={isModal}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input value={selectedTodoItem.text} onChange={changeModalValue} />
    </Modal>
  );
};

export default ModalWindow;
