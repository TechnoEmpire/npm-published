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
          <Button variant="soft" textColor="rgb(251, 251, 251)" bgColor="rgb(47, 46, 46)">
            Open Modal
          </Button>
        </Dialog.Trigger>

        {/*  you can control  (full-screen or slide-up/down ) */}
        <Dialog.Content position={"slide-down"} >
          <Dialog.Title>Opened Modal</Dialog.Title>

          <Dialog.Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eum, delectus adipisci ducimus.
          </Dialog.Description>

          {/*  you can control flex */}
          <Flex gap="20px" mt="60px" justify="end">
            <Dialog.Cancel>
              <Button variant="solid" >Cancel</Button>
            </Dialog.Cancel>

            <Dialog.Action onAction={handleFunction}>
              <Button variant="solid"  bgColor="#B4DDF2">Do something</Button>
            </Dialog.Action>
          </Flex>

        </Dialog.Content>
      </Dialog.Root>

    </div>
  );
};

export default Sample;
