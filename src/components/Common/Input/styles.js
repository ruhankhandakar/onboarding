import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.6;
    padding-bottom: 10px;
  }

  input {
    padding: 12px 9px;
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    outline: none;
  }

  input::placeholder {
    font-weight: 500;
    opacity: 0.6;
  }

  input:focus {
    border-color: #664de5;
    border-width: 2px;
  }
`;
