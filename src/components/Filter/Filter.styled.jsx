import styled from 'styled-components';

export const Label = styled.label`
  margin-left: 30px;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin-left: 15px;
  width: 230px;
  height: 20px;
  padding: 10px 10px;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  }

  &::placeholder {
    color: #0000008d;
  }
`;
