import styled from "styled-components";
import colors from "../../styles/colors";

interface IProps {
  primaryButton: boolean;
  size: string;
}

export const Container = styled.button<IProps>`
  width: ${(props) => props.size};
  border-radius: 55px;
  background-color: ${(props) =>
    props.primaryButton ? colors.blue : colors.default};
  border: 3px solid
    ${(props) => (!props.primaryButton ? colors.blue : colors.default)};
  font-weight: 400;
  font-size: 1.5vw;
  color: ${(props) => (props.primaryButton ? colors.default : colors.white)};
  cursor: pointer;
  margin: 10px auto 0;
  &:hover {
    filter: brightness(0.8);
  }
`;
