import FullScreenModal from '../../components/Kaz/FullScreenModal';

const meta = {
  title: 'COMPONENTS/KazModal',
  component: FullScreenModal,
  argTypes: {
    btnText : {
      control: { type: 'text' },
    },
    btnColor: {
      control: { type: 'color' },
    },
    btnTextColor : {
      control: { type: 'color' },
    },
    modalTitle : {
      control: { type: 'text' },
    },
    modalText : {
      control: { type: 'text' },
    },

  },
};


export const FullScreen = { 
  // args: {
  //   variant: 'orange',
  // }
  // texts: "User's text is here",
  // variant: 'orange',
};

//! ================================================
//! Test the effects of the props in Storybook here
//! ================================================
// export const FullScreenTrial = {
//   render: () => (
//     <>
//       {/* Default */}
//       <FullScreenModal 
//       btnText='Launch Modal'
//       btnColor='#6525e5'
//       btnTextColor='#e7e5e5'

//       modalTitle='This is a title!'
//       modalText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi doloremque nostrum provident consequuntur tenetur modi mollitia dolor inventore corrupti amet fuga fugit, cupiditate sapiente quo? Sint eveniet saepe ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi doloremque nostrum provident consequuntur tenetur modi mollitia dolor inventore corrupti amet fuga fugit, cupiditate sapiente quo? Sint eveniet saepe ratione."
//       />
//     </>
//   )
// }


export default meta;
