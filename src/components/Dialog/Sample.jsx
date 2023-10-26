import React from 'react';
import Dialog from './Dialog.jsx';
import Button from './Button.jsx';
import Flex from './Flex.jsx';

const Sample = () => {
  const handleFunction = () => {
    alert("You did something!");
  };

  return (
    <div style={{ padding: '20px' }}>
      <Dialog.Root>
        
        <Dialog.Trigger>
          {/*  you can control Button (variant = soft or solid) */}
          <Button variant="solid" textColor="rgb(62, 62, 62)" bgColor="rgb(229, 229, 229)">
            OPEN MODAL
          </Button>
        </Dialog.Trigger>

        {/*  you can control  (full-screen or slide-up/down ) */}
        <Dialog.Content position={"full-screen"} >
          <Dialog.Title>Opened Modal</Dialog.Title>

          <Dialog.Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eum, delectus adipisci ducimus.
          </Dialog.Description>

          {/*  you can control flex */}
          <Flex gap="20px" mt="60px" justify="end">
            <Dialog.Cancel>
              <Button variant="soft" >Cancel</Button>
            </Dialog.Cancel>

            <Dialog.Action onAction={handleFunction}>
              <Button variant="solid"  bgColor="rgb(123, 229, 41)">Do something</Button>
            </Dialog.Action>
          </Flex>

        </Dialog.Content>
      </Dialog.Root>

    </div>
  );
};

export default Sample;
