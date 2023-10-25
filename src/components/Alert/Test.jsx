// App.jsx
import React from 'react';
import AlertDialog from './AlertDialog.jsx';
import Button from './Button.jsx';
import Flex from './Flex.jsx';

const App = () => {
  const handleRevokeAccess = () => {
    alert("You did something!");
  };

  return (
    <div style={{ padding: '20px' }}>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          {/*  you can control Button (variant = soft or solid) */}
          <Button variant="solid" textColor="rgb(62, 62, 62)" bgColor="rgb(229, 229, 229)">
            OPEN MODAL
          </Button>
        </AlertDialog.Trigger>

        {/*  you can control  (full-screen or slide-up/down ) */}
        <AlertDialog.Content position={"slide-down"} >
          <AlertDialog.Title>Opened Modal</AlertDialog.Title>

          <AlertDialog.Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eum, delectus adipisci ducimus.
          </AlertDialog.Description>

          {/*  you can control flex */}
          <Flex gap="20px" mt="60px" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" >Cancel</Button>
            </AlertDialog.Cancel>

            <AlertDialog.Action onAction={handleRevokeAccess}>
              <Button variant="solid"  bgColor="rgb(123, 229, 41)">Do something</Button>
            </AlertDialog.Action>
          </Flex>

        </AlertDialog.Content>

      </AlertDialog.Root>

    </div>
  );
};

export default App;
