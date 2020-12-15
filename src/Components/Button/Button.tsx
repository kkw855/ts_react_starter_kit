import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const StyledButton = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  font-family: 'Nanum Gothic', Roboto, Helvetica, Arial, 'sans-serif';
  padding: 6px 16px;
  border-radius: 4px;
  color: ${(props) => {
    if (props.variant === 'contained') {
      switch (props.color) {
        case 'primary':
        case 'secondary':
          return 'white';
        default:
          return 'black';
      }
    } else {
      switch (props.color) {
        case 'primary':
          return props.theme.palette.primary.main;
        case 'secondary':
          return props.theme.palette.secondary.main;
        default:
          return 'black';
      }
    }
  }};
  background-color: ${(props) => {
    if (props.variant === 'contained') {
      const key = props.isLoading ? 'dark' : 'main';
      switch (props.color) {
        case 'primary':
          return props.theme.palette.primary[key];
        case 'secondary':
          return props.theme.palette.secondary[key];
        default:
          return 'gray';
      }
    } else {
      return 'transparent';
    }
  }};
  transition: 220ms all ease-in-out;
  &:hover {
    background-color: ${(props) => {
      if (props.variant === 'contained') {
        switch (props.color) {
          case 'primary':
            return props.theme.palette.primary.dark;
          case 'secondary':
            return props.theme.palette.secondary.dark;
          default:
            return 'rgba(0, 0, 0, 0.04)';
        }
      } else {
        switch (props.color) {
          case 'primary':
            return 'rgba(25, 118, 210, 0.04)';
          case 'secondary':
            return 'rgba(220, 0, 78, 0.04)';
          default:
            return 'rgba(0, 0, 0, 0.04)';
        }
      }
    }};
  }
  .start-icon {
    margin-right: 8px;
  }
  .end-icon {
    margin-left: 8px;
  }
  width: ${(props) => props.fullWidth && '100%'};
`;

type ButtonProps = {
  variant?: 'contained';
  fullWidth?: boolean;
  isLoading?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  color?: 'inherit' | 'primary' | 'secondary';
  onClick?: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, startIcon, endIcon, isLoading, ...others } = props;

  const StartIcon = startIcon ? (
    <span className="start-icon">{startIcon}</span>
  ) : null;

  const EndIcon = endIcon ? <span className="end-icon">{endIcon}</span> : null;

  const LoadingIcon = (
    <span className="start-icon">
      <FontAwesomeIcon icon={faSpinner} spin />
    </span>
  );

  return (
    <StyledButton isLoading={isLoading} disabled={isLoading} {...others}>
      {isLoading ? LoadingIcon : StartIcon}
      {children}
      {EndIcon}
    </StyledButton>
  );
};

export default Button;
