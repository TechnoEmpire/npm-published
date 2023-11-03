import React, { useState, useContext, createContext } from 'react';
import styled, { keyframes } from 'styled-components';



const DialogContext = createContext();

const loadFont = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};


const CloseButton = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { bottom: -400px; }
  to { bottom: 40%; }
`;

const slideDown = keyframes`
  from { top: -400px; }
  to { top: 30%; }
`;

const primaryColor = '#ffffff';
const borderRadius = '10px';
const shadow = '0 0 15px rgba(0,0,0,0.5)';

const Overlay = styled.div`
display: ${({ $isopen }) => ($isopen === "true" ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
display: ${({ $isopen }) => ($isopen === "true" ? 'block' : 'none')};
  background-color: ${primaryColor};
  font-family: 'Roboto', sans-serif;
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
  const [isopen, setisopen] = useState(false);

  return (
    <DialogContext.Provider value={{ isopen, setisopen }}>
      {children}
    </DialogContext.Provider>
  );
};

const Trigger = ({ children }) => {
  const { setisopen } = useContext(DialogContext);
  return React.cloneElement(children, { onClick: () => setisopen(true) });
};


const Content = ({ position = "default", children }) => {
  const { isopen, setisopen } = useContext(DialogContext);

  if (!isopen) return null; 

  return (
    <>
      <Overlay $isopen={isopen.toString()} onClick={() => setisopen(false)} />
      <ModalContent className={position} $isopen={isopen.toString()}>
        <CloseButton onClick={() => setisopen(false)}>x</CloseButton>
        {children}
      </ModalContent>
    </>
  );
};

const Title = ({ children }) => <h1>{children}</h1>;

const Description = ({ children }) => <p>{children}</p>;

const Cancel = ({ children }) => {
  const { setisopen } = useContext(DialogContext);
  return React.cloneElement(children, { onClick: () => setisopen(false) });
};

const Action = ({ children, onAction }) => {
  const { setisopen } = useContext(DialogContext);

  return React.cloneElement(children, {
    onClick: () => {
      if (onAction) onAction();
      setisopen(false);
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
