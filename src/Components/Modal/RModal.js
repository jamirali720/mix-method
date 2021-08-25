import React, { useState } from 'react';
import Modal from "react-modal";

Modal.setAppElement('#root')
const RModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // const closeModal=()=> {
    //     setModalIsOpen(false);
    // }
    // const openModal=()=> {
    //     setModalIsOpen(true);
    // }
    return (
      <div>
        {/* <button onClick={openModal}>modal open</button> */}
        <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
        <Modal isOpen={modalIsOpen} 
        shouldCloseOnOverlayClick={false}        
        onRequestClose={()=> setModalIsOpen(false)}
        style={
            {
                overlay:{
                    backgroundColor:"gray",
                },
               
                    content :{
                        color: "orange"
                    }
                
            }
        }
        >
          <h1> model component</h1>
          <p>Modal body</p>

          {/* <button onClick={closeModal}> Close Modal</button> */}
          <button onClick={() => setModalIsOpen(false)}>close Modal</button>
        </Modal>
      </div>
    );
};

export default RModal;