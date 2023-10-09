import React from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
  args: {},
};

const Template = (args) => <LoginForm {...args} />;

export const Story = Template.bind({});
Story.args = {};
