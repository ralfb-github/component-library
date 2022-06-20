import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Field } from '../fields/Field';

export default {
  title: 'examples/Input',
  component: Field.Input,
  subComponents: { Field, label: Field.Label },
} as Meta;

export const Default: Story = ({ placeholder }) => {
  return (
    <Field>
      <Field.Label>My Label</Field.Label>
      <Field.Input placeholder={placeholder} />
    </Field>
  );
};
Default.args = {
  placeholder: 'placeholder Content',
};
