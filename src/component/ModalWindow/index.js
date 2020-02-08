import React from "react";
import { Modal, Input } from "antd";

const ModalWindow = ({
  handleOk,
  handleCancel,
  changeModalValue,
  editId,
  editText,
  visible
      }) => {

  const handleOkModal = () => handleOk(editId, editText);

  return (
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOkModal}
        onCancel={handleCancel}
      >
        <Input value={editText} onChange={changeModalValue} />
      </Modal>
  );
};

export default ModalWindow;
