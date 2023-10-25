import React from 'react';

import  TestPage  from '../components/TenTen/TestPage';

export default {
  title: 'Components/TestPage',
  component: TestPage,
  args: {},
  argTypes: {
    btnBg: {
      control: { type: 'color' },
    },
    btnTextColor: {
      control: { type: 'color' },
    },
  },
}

const Template = (args) => <TestPage {...args} />;

export const Story = Template.bind({});
Story.args = {};
