import React, { useState } from 'react';
import { Button, Modal, ModalContent, ModalHeader, ModalBody } from '../../components/TenTen'; // Adjust the relative import path

import styles from './TestPage.module.scss';

const TestPage = ({ btnBg, btnTextColor }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Import button here */}
      <Button onClick={openModal} className={styles.btn} btnBg={btnBg} btnTextColor={btnTextColor} >
    <>
    <span className={styles.btnOne}>Click me</span>
    {/* <span className="btnOne">Click me</span> */}
      <span className={styles.btnTwo}>Great!</span> 
    </>
      </Button>

      {/* Import button here */}
      <Modal isOpen={isOpen} closeModal={closeModal}>

      <ModalContent position="full-screen">

        {/* <ModalContent className={styles.content} > */}
          <ModalHeader onClick={closeModal} className={styles.Hea}>
            {/* <h1>Weolcome To Anime World</h1> */}
            <h1>Login </h1>
          </ModalHeader>
          <ModalBody>
            {/* <p>Hello world</p> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default TestPage;
