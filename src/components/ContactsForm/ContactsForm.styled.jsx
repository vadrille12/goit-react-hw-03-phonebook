import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as Error,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  position: relative;
  margin: 30px auto;
  width: 400px;
  height: 300px;
  padding: 20px;
  border-radius: 6px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;

export const FormButton = styled.button`
  position: absolute;
  bottom: 25px;
  right: 25px;

  padding: 7px 15px;
  border: none;
  border-radius: 7px;
  font-size: 18px;
  color: black;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  cursor: pointer;
  background-color: transparent;

  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  &:active {
    color: white;
    background-color: #629ee1;
  }
`;

export const ErrorMessage = styled(Error)`
  color: red;
`;

export const Field = styled(FormikField)`
  height: 40px;
  padding: 5px 15px;
  border-radius: 6px;
  margin-bottom: 6px;
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
