import styled from 'styled-components';

export const Data = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
  margin-right: 40px;
  padding: 5px 10px;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  background-color: transparent;
  color: black;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  cursor: pointer;

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
