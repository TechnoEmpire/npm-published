// CSS Animation
import styles from './DialogAnimation.module.scss';
import React, { useState, useContext } from 'react';

// Create a new context for the Dialog
const DialogContext = React.createContext();

// ======================================================
// Root component 
// To provide the isOpen state and its setter function to its descendants
// ======================================================
const DialogRoot = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Provide the isOpen state and its setter function to descendants using the DialogContext (value)
  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

// ======================================================
// Trigger Component (Open Dialog)
// ======================================================
// This opens the Dialog when its child component is clicked
const Trigger = ({ children }) => {
  // Extract the setIsOpen function from context
  const { setIsOpen } = useContext(DialogContext);

  // When the child of Trigger is clicked, open the Dialog
  // cloneElement is used to pass the onClick function to the child of Trigger
  return React.cloneElement(children, { onClick: () => setIsOpen(true) });
};

// ======================================================
//!  Content component ( With External SCSS)
// ======================================================
const Content = ({ position, children }) => {

  // Extract the isOpen state and its setter function from context
  const { isOpen, setIsOpen } = useContext(DialogContext);

  let positionType;

  switch (position) {
    case 'slide-up':
      positionType = 'slide-up';
      break;
    case 'slide-down':
      positionType = 'slide-down';
      break;
    case 'full-screen':
      positionType = 'full-screen';
      break;
    default:
      positionType = 'default';
  }

  // Styles for the dialog modal
  const modalStyles = {
    display: isOpen ? 'block' : 'none',
  };

  // Styles for the overlay behind the dialog
  const overlayStyles = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  };

  // Render the overlay and dialog content
  return (
    <>
      {/* Overlay to close the dialog when clicked */}
      <div style={overlayStyles} onClick={() => setIsOpen(false)} />

      {/*//!  Dialog content with SCSS*/}
      <div
        style={modalStyles}
        className={`${styles['modalContent']} ${styles[positionType]}`}
      >
        {children}
      </div>
    </>
  );
};

// =========================================================
// Title component for the dialog header
// =========================================================
const Title = ({ children }) => <h1>{children}</h1>;

// =========================================================
// Description component 
// =========================================================
const Description = ({ children }) => <p>{children}</p>;

// =========================================================
// Cancel component to provide a way to close the dialog
// =========================================================
const Cancel = ({ children }) => {
  // Extract the setIsOpen function from context
  const { setIsOpen } = useContext(DialogContext);

  // When clicked, close the dialog
  return React.cloneElement(children, { onClick: () => setIsOpen(false) });
};

// =========================================================
// Action component to perform a custom action and close the dialog
// =========================================================
const Action = ({ children, onAction }) => {
  // Extract the setIsOpen function from context
  const { setIsOpen } = useContext(DialogContext);

  // cloneElement is used to pass the onClick function to the child of Action
  return React.cloneElement(children, {
    onClick: () => {
      onAction && onAction();  // If an action is provided, execute it
      setIsOpen(false);  // Then close the dialog
    }
  });
};

// =========================================================
// Compile all sub-components into the Dialog object
// =========================================================
const Dialog = {
  Root: DialogRoot,
  Trigger,
  Content,
  Title,
  Description,
  Cancel,
  Action,
};

// Export the Dialog object
export default Dialog;  