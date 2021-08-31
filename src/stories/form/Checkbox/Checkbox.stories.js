import React from 'react';
import CheckBox from './CheckBox';

export default {
  title: 'Components/Form/Checkbox',
  component: CheckBox,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template = args => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default enabled checkbox'
};
