import styled from "styled-components";
import colors from "../../styles/colors";

interface IProps {
  primaryButton: boolean;
}

export const Container = styled.button<IProps>`
  width: 250px;
  height: 50px;
  border-radius: 55px;
  background-color: ${(props) =>
    props.primaryButton ? colors.blue : colors.default};
  border: 3px solid
    ${(props) => (!props.primaryButton ? colors.blue : colors.default)};
  font-weight: 400;
  font-size: 26px;
  color: ${(props) => (props.primaryButton ? colors.default : colors.white)};
  cursor: pointer;
  margin: 10px auto 0;
  @media screen and (max-width: 450px) {
    width: 150px;
    height: 40px;
    font-size: 15px;
  }
  transition: 0.2s ease-in;
  &:hover {
    filter: brightness(0.8);
  }
`;
