// File: src/fields/Field.spec.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Field } from './Field';
jest.mock('../utils/useUniqueID');
describe('Input', () => {
  it('applies unique ID to id attribute', () => {
    render(
      <Field>
        <Field.Label>Input</Field.Label>
        <Field.Input />
      </Field>
    );

    expect(screen.getByLabelText('Input')).toHaveAttribute('id', 'unique-id');
  });
});

describe('TextArea', () => {
  it('applies unique ID to id attribute', () => {
    render(
      <Field>
        <Field.Label>Textarea</Field.Label>
        <Field.Textarea />
      </Field>
    );

    expect(screen.getByLabelText('Textarea')).toHaveAttribute(
      'id',
      'unique-id'
    );
  });
});
