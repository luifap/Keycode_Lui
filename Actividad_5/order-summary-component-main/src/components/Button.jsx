import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #00bcd4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #008c9e;
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
