import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 100%;
  min-height: 100%;
  max-height: 100vh;
  padding: 2.4rem 3.2rem;

  @media screen and (min-width: 1024px) {
    padding: 3.2rem 7.2rem;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  height: 4.8rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.6rem;
`;

export const UserActions = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  background: transparent;
  outline: none;
  border: none;
  border-radius: 0.8rem;

  transition: all 0.2s;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    transform: rotate(90deg);
  }
`;

export const ChatBody = styled.body`
  width: 100%;
  padding-bottom: 2.4rem;
  height: calc(100vh - (4.8rem + 2.6rem + 7.6rem + 2.4rem));
  overflow-y: auto;

  @media screen and (min-width: 1024px) {
    height: calc(100vh - (4.8rem + 2.6rem + 7.6rem + 3.2rem));
  }

  & .message + .message {
    margin-top: 3rem;
  }

  &::-webkit-scrollbar {
    width: 0.1rem;
    display: none;
  }

  /* &::-webkit-scrollbar-track {
    background: #282843;
    border-radius: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #8257e5;
    border-radius: 0.8rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #9f75ff;
  }

  &::-webkit-scrollbar-thumb:active {
    background: #6f48c9;
  } */
`;

export const ChatFooter = styled.footer`
  width: 100%;
  height: 7.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DayDivider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #a8a8b3;
  & p {
    background: #282843;
    padding: 1rem;
    border-radius: 0.8rem;
  }
`;
