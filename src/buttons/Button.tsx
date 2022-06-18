import React from 'react';
import { StyledButton } from './style';
import PropTypes from 'prop-types';
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
Button.propTypes = {
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isFullWidth: PropTypes.bool,
};
Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
};
Button.displayName = 'Button';
