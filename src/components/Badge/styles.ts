import styled, { css } from "styled-components";

export const BadgeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.8rem;
  height: 4.8rem;

  border-radius: 50%;
  margin-right: 1.6rem;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  transition: all 0.2s ease-in;
`;

export const Name = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
`;

export const Status = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #00b37e;

  &::before {
    content: "";
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #00b37e;
    margin-right: 0.4rem;
  }
`;
