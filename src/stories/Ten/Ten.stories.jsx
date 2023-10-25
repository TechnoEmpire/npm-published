import React from 'react';

import Ten  from '../../components/Ten/Ten';

export default {
  title: 'Components/Ten',
  component: Ten,
  args: {},
}

const Template = (args) => <Ten {...args} />;

export const Story = Template.bind({});
Story.args = {};
