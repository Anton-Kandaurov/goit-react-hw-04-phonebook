import styled from 'styled-components';

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 7px;
`;

export const InputField = styled.input`
  width: 250px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  font-weight: 650;
  height: 30px;
  border-radius: 4px;
  padding: 0 20px;
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

export const Form = styled.form`
  padding: 20px;
  border: 2px solid black;
  max-width: 400px;
  margin-bottom: 20px;
`;