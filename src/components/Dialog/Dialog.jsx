import React, { useState, useContext, createContext } from 'react';
import styled, { keyframes } from 'styled-components';

const DialogContext = createContext();

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { bottom: -400px; }
  to { bottom: 20%; }
`;

const slideDown = keyframes`
  from { top: -400px; }
  to { top: 40%; }
`;

const primaryColor = '#ffffff';
const borderRadius = '10px';
const shadow = '0 0 15px rgba(0,0,0,0.5)';

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: ${primaryColor};
  min-width: 700px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: ${borderRadius};
  box-shadow: ${shadow};
  z-index: 1000;
  padding: 2rem;

  &.slide-up {
    animation: ${slideUp} 0.5s ease forwards;
  }

  &.slide-down {
    animation: ${slideDown} 0.5s ease forwards;
  }

  &.full-screen {
    position: fixed;
    top: 0;
    /* left: 0; */
    width: 90%;
    height: 100vh;
    animation: ${fadeIn} 0.5s ease-in-out forwards;
    padding: 4rem 4rem;
  }

  @media screen and (max-width: 768px) {
    min-width: 70%;
    transform: translate(-50%, -30%);
  }
`;

const DialogRoot = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

const Trigger = ({ children }) => {
  const { setIsOpen } = useContext(DialogContext);
  return React.cloneElement(children, { onClick: () => setIsOpen(true) });
};


const Content = ({ position = "default", children }) => {
  const { isOpen, setIsOpen } = useContext(DialogContext);

  if (!isOpen) return null; 

  return (
    <>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <ModalContent className={position} isOpen={isOpen}>
        {children}
      </ModalContent>
    </>
  );
};

const Title = ({ children }) => <h1>{children}</h1>;

const Description = ({ children }) => <p>{children}</p>;

const Cancel = ({ children }) => {
  const { setIsOpen } = useContext(DialogContext);
  return React.cloneElement(children, { onClick: () => setIsOpen(false) });
};

const Action = ({ children, onAction }) => {
  const { setIsOpen } = useContext(DialogContext);

  return React.cloneElement(children, {
    onClick: () => {
      if (onAction) onAction();
      setIsOpen(false);
    },
  });
};

const Dialog = {
  Root: DialogRoot,
  Trigger,
  Content,
  Title,
  Description,
  Cancel,
  Action,
}

export default Dialog;
