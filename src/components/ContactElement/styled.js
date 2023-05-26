import styled from 'styled-components';

export const ContactItem = styled.li`
  margin-bottom: 10px;
`;

export const ContactButton = styled.button`
  display: inline;
  font-weight: 650;
  height: 30px;
  border-radius: 4px;
  padding: 0 20px;
  margin-left: 20px;
  transition: 400ms;
  border: none;
  background-color: rgb(173, 173, 173);
  cursor: pointer;

  &:hover,
  &:focus {
    color: #f4f4f4;
    background-color: #333;
  }
`;