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
  max-width: 450px;
  width: 30vw;
  padding: 1rem;
  border-radius: 22px;
  border: 3px solid ${colors.white};
  background: #dff6ff;
  font-size: 24px;
  &:focus {
    border: 3px solid ${colors.default};
  }
  @media screen and (max-width: 819px) {
    width: 320px;
  }
  @media screen and (max-width: 320px) {
    width: 220px;
  }
`;

export const Button = styled.button`
  max-width: 450px;
  width: 30vw;
  border-radius: 55px;
  background: ${colors.blue};
  border: 3px solid ${colors.default};
  font-weight: 400;
  font-size: 2rem;
  color: ${colors.default};
  margin-top: 50px;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    filter: brightness(0.8);
  }
  @media screen and (max-width: 819px) {
    width: 320px;
  }
  @media screen and (max-width: 320px) {
    width: 220px;
  }
`;
