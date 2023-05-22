import styled from "styled-components";
import { colors } from "./theme";

export const InputSearch = styled.input`
  border: none;
  background: none;
  outline: none;
  border-bottom: 1px 200px;
  font-family: "Jura", sans-serif;
  font-size: 12px;
  font-style: normal;
  color: ${(props) =>
    props.$primary ? `${colors.primary}` : `${colors.white}`};
  text-shadow: ${(props) =>
    props.$primary
      ? `1px 1px 1px ${colors.purple}`
      : `1px 1px 1px ${colors.primary}`};
  width: 100%;

  &::placeholder {
    color: ${(props) =>
        props.$primary ? `${colors.primary}` : `${colors.white}`};
      text-shadow: ${(props) =>
        props.$primary
          ? `1px 1px 1px ${colors.purple}`
          : `1px 1px 1px ${colors.primary}`};
    border: none;
    background: none;
  }
`;

const Input = styled.input.attrs({ type: "checkbox" })``;

const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const LabelText = styled.span`
  ${(props) => {
    switch (props.$color) {
      case "primary":
        return css`
          background-color: "none";
          color: ${colors.white};
          ${Input}:checked + && {
            color: ${colors.primary};
          }
        `;
      case "secondary":
        return css`
        background-color: "none";
        color: ${colors.white};
        ${Input}:checked + && {
          color: ${colors.secondary};
        }
          }
        `;
      default:
        return css`
          background-color: "none";
          color: ${colors.white};
          ${Input}:checked + && {
            color: ${colors.purple};
          }
        `;
    }
  }}
`;
