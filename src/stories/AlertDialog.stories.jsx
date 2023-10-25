import React from 'react';

import Sample from '../components/Dialog/Sample.jsx';

export default {
  title: 'Components/Dialog',
  component: Sample,
};

// Display Test component
const Template = (args) => <Sample {...args} />;

export const SamplePage = Template.bind({});
SamplePage.args = {};

SamplePage.parameters = {
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
