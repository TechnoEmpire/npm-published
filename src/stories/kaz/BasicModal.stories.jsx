import BasicModal from '../../../src/components/Kaz/BasicModal';

const meta = {
  title: 'COMPONENTS/KazModal',
  component: BasicModal,
  argTypes: {
    btnColor: {
      control: { type: 'color' },
    },
    btnTexts: {
      control: { type: 'text' },
    },
    btnTextsColor: {
      control: { type: 'color' },
    },
    texts: {
      control: { type: 'text' },
    },
    modalColor: {
      control: { type: 'color' },
    },
    modalTextsColor: {
      control: { type: 'color' },
    },
  },
};
export default meta;


export const Basic = { 
  // args: {
  //   variant: 'orange',
  // }
  // texts: "User's text is here",
  // variant: 'orange',
};

//! ================================================
//! Test the effects of the props in Storybook here
//! ================================================
export const TrialBasicModal = {
  render: () => (
    <>
      {/* Default */}
      <BasicModal 
      btnColor={'#6525e5'}
      btnTexts='Open Modal'
      btnTextsColor='#e7e5e5'

      modalColor={'#434343'}
      texts='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit repellendus voluptates assumenda molestias facilis unde enim ratione inventore, consequuntur vitae at, dignissimos quis nisi cum quia esse perferendis ea!'
      modalTextsColor='#e7e5e5'
      />
    </>
  )
}
