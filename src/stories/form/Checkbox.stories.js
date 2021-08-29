import React from 'react';
import { CheckBox } from '../../components';

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
