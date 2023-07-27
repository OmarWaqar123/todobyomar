import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "./modal.scss"

function ModalComponent ({setModalOpen,modalOpen,Settodo ,todo,AddTodo})  {
  
  

  return (
    <>
      
      <Modal
        title="Add New Task"
        centered
        open={modalOpen}
        onOk={() => {setModalOpen(false); Settodo("")}}
        onCancel={() => {setModalOpen(false); Settodo("") }}
        footer={[
            <Button 
            className='add-btn'
            disabled={!todo}
            onClick={AddTodo}
            >
              Add
            </Button>
          ]}
  
      >
        <textarea 
        type='text'
        placeholder="What's on your agenda?"
        className='type-text'
        value={todo}
        onChange={(e) => Settodo(e.target.value)}
        
        />
      </Modal>
    </>
  );
};

export default ModalComponent;