import styled from "styled-components";
import { colors } from "./theme";

export const IMG = styled.img`
  background: "none";
  display: inline-flex;
  justify-content: center;
  align-items: center;
    object: fit-content

  &.xs {
    width: 10px;
    height: 10px;
  }

  &.s {
    width: 25px;
    height: 25px;
  }

  &.m {
    width: 50px;
    height: 50px;
  }

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
`;
