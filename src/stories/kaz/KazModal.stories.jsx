import KazModal from '../../../src/components/Kaz/KazModal';

const meta = {
  title: 'COMPONENTS/KazModal',
  component: KazModal,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['orange', 'green', 'red'],
    }
  },
};

export default meta;


export const Kaz = {
  // args: {
  //   variant: 'orange',
  // }
};

// export const KazGreen = {
//   args: {
//     variant: 'green',
//   }
// };

//   export const KazRed = {
//     args: {
//       variant: 'red',
//     }
// };


export const GroupedKaz = {
  render: () => (
    <div style={{ padding: 10 }}>
      <KazModal variant="orange" />
      <div style={{ padding: "40px 0 "}}>
        <KazModal variant="green" />
      </div>
      <KazModal variant="red" />
    </div>
  )
}