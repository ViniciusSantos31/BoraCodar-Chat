import styled, { keyframes } from "styled-components";

const animateButton = keyframes`
  0% {
    transform: translateX(0%);
  }

  50% {
    transform: translateX(15%);
  }

  100% {
    transform: translateX(0%);
  }
`;

export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1.5rem 2.4rem;
  background: #282843;

  border-radius: 5rem;

  cursor: text;

  &:focus-within,
  &:hover {
    outline: 2px solid #8257e5;
  }

  &:focus-within :not(button:disabled) img {
    animation: ${animateButton} infinite 1s;
  }

  & input {
    background: none;
    border: none;
    outline: none;

    height: 100%;

    color: #e1e1e6;
    font-size: 1.4rem;

    &::placeholder {
      color: #e1e1e6;
      font-size: 1.4rem;
    }
  }

  & button {
    background: none;
    border: none;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover img {
      animation: ${animateButton} infinite 1s;
    }
  }
`;
