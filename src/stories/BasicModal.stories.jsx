import BasicModal from '../components/BasicModal';

const meta = {
  title: 'COMPONENTS',
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


export const Basic = {};

//! ================================================
//! Test the effects of the props in Storybook here
//! ================================================
// export const BasicTest = {
//   render: () => (
//     <>
//       {/* Default */}
//       <BasicModal
//         btnColor={'#000000'}
//         btnTexts='Open Modal'
//         btnTextsColor='#e7e5e5'

//         modalColor={'#434343'}
//         texts='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit repellendus voluptates assumenda molestias facilis unde enim ratione inventore, consequuntur vitae at, dignissimos quis nisi cum quia esse perferendis ea!'
//         modalTextsColor='#e7e5e5'
//       />
//     </>
//   )
// }
