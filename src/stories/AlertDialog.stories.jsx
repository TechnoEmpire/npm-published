import React from 'react';

import Test from '../components/Alert/Test.jsx';

export default {
  title: 'Components/AlertDialog',
  component: Test,
};

// Display Test component
const Template = (args) => <Test {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  controls: { 
    expanded: true, 
    include: [ 
      "Trigger",
      "Content",
      "Title",
      "Description",
      "Cancel",
      "Action"
    ] 
  },
};
