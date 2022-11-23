import styled from "styled-components";
import colors from "../../styles/colors";
import DefaultPage from "../_DefaultPage";

export const Container = styled(DefaultPage)``;

export const Text = styled.h1`
  font-weight: 400;
  font-size: 24px;
  color: ${colors.white};
`;

export const Input = styled.input`
  width: 424px;
  height: 75px;
  padding: 1rem;
  border-radius: 22px;
  border: none;
  background: #dff6ff;
  font-size: 28px;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 55px;
    font-size: 15px;
  }

  &:focus {
    border: 3px solid ${colors.default};
  }
`;

export const Button = styled.button`
  width: 424px;
  height: 75px;
  border-radius: 55px;
  background: ${colors.blue};
  border: 3px solid ${colors.default};
  font-weight: 400;
  font-size: 26px;
  color: ${colors.default};
  cursor: pointer;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 55px;
    font-size: 15px;
  }
  transition: 0.2s ease-in;
  &:hover {
    filter: brightness(0.8);
  }
`;
