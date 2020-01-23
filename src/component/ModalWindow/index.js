import React from "react";
import { Modal, Input } from "antd";

const ModalWindow = ({
  handleOk,
  handleCancel,
  changeModalValue,
  editId,
  todoList,
  editText,
  visible
}) => {
  const handleOkModal = () => handleOk(editId, todoList, editText);

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOkModal}
        onCancel={handleCancel}
      >
        <Input value={editText} onChange={changeModalValue} />
      </Modal>
    </div>
  );
};

export default ModalWindow;