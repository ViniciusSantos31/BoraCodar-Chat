import styled, { css } from "styled-components";

type ContainerProps = {
  isUser: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  ${({ isUser }) =>
    isUser &&
    css`
      align-items: flex-end;
      & .message-header {
        justify-content: flex-end;
      }

      & .message-ballon {
        background: #07847e;
        border-radius: 0.8rem 0.8rem 0 0.8rem;
      }
    `}
`;

export const MessageHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & .message-user,
  & .message-time {
    font-size: 1.2rem;
    font-weight: 400;
  }

  & .message-user:after {
    content: "-";
    margin: 0 0.4rem;
  }
`;

export const MessageBallon = styled.p.attrs({
  className: "message-ballon",
})`
  width: fit-content;
  max-width: 80%;
  padding: 1.4rem;
  margin-top: 1rem;

  background: #633bbc;
  font-size: 1.2rem;
  line-height: 1.6rem;

  border-radius: 0 0.8rem 0.8rem 0.8rem;

  @media screen and (max-width: 320px) {
    max-width: 100%;
  }
`;
