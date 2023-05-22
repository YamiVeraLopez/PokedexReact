import styled from "styled-components";
import { colors } from "./theme";

export const Button = styled.button`
  background: ${(props) => (props.$primary ? `${colors.primary}` : "none")};
  box-shadow: 1px 1px 4px #733d3d;
  border: ${(props) =>
    props.$primary ? "none" : `1px solid ${colors.primary}`};
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Jura", sans-serif;
  font-weight: 800;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: ${(props) =>
    props.$primary ? `${colors.white}` : `${colors.primary}`};
  text-shadow: ${(props) =>
    props.$primary
      ? `1px 1px 1px ${colors.blue}`
      : `1px 1px 1px ${colors.primary}`};

  margin: 15px;

  &.search {
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
  }

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
`;
