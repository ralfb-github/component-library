import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledLabel } from './style';
export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<'label'>
>(({ ...props }, ref) => {
  const id = useContext(FieldContext);
  return <StyledLabel htmlFor={id} ref={ref} {...props} />;
});
Label.displayName = 'Field.Label';
