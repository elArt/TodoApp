import React from 'react';
import { Modal, Input } from "antd";

const ModalWindow = ({visible, handleOk, handleCancel, changesItem, changeModalValue}) => {
    return(
        <Modal
            title="Basic Modal"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
        > 
        <Input value = {changesItem.text} onChange = {changeModalValue}/>
      </Modal>
    )
}

export default ModalWindow;