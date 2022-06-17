import React from 'react';
import { StyledButton } from './style';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'secondary' | 'primary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, isFullWidth, ...props }, ref) => {
    return (
      <StyledButton
        type="button"
        ref={ref}
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
};
Button.displayName = 'Button';
