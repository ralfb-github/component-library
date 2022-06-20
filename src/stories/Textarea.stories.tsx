import { Story, Meta } from '@storybook/react';
import { Field } from '../fields/Field';
import React from 'react';

export default {
  title: 'Examples/Textarea',
  component: Field.Textarea,
  subcomponent: { Field, label: Field.Label },
} as Meta;

const Template: Story = (args) => {
  return (
    <Field>
      <Field.Label>TextArea</Field.Label>
      <Field.Textarea placeholder="Custom TextArea" {...args} />
    </Field>
  );
};

export const Default = Template.bind({});
Default.args = {
  isResizable: true,
};
