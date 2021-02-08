import React from 'react';
import Button from '../Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  children: 'Localiza',
  backgroundHover: '#d4db26',
  colorHover: '#00974A',
  background: '#00974A',
  color: '#fff',
};
