import styled from 'styled-components';

// TODO: HEX => RGBA 함수
const IconButton = styled.button<{ color?: string; size?: number }>`
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  padding: 6px 10px;
  background-color: transparent;
  ${(props) => {
    switch (props.color) {
      case 'primary':
        return `
          color: ${props.theme.palette.primary.main};
        `;
      case 'secondary':
        return `
          color: ${props.theme.palette.secondary.main};
        `;
      default:
        return `
          color: ${props.theme.palette.primary.contrastText};
        `;
    }
  }};
  transition: 220ms all ease-in-out;
  &:hover {
    ${(props) => {
      switch (props.color) {
        case 'primary':
          return `
          background-color: rgba(25, 118, 210, 0.1);
        `;
        case 'secondary':
          return `
          background-color: rgba(220, 0, 78, 0.1);
        `;
        default:
          return `
          background-color: grayDark;
        `;
      }
    }};
  }
`;

export default IconButton;
