import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../buttons/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story = (args: ButtonProps) => (
  <Button {...args}>my button component</Button>
);
export const Default = Template.bind({});
Default.args = {
  disabled: false,
};
