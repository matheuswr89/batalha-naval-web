import styled, { css } from "styled-components";
import colors from "../../styles/colors";

interface SquareProps {
  backgroudColor: string;
  margin?: string;
}

export const SquareContainer = styled.div<SquareProps>`
  width: 2.5vw;
  height: 2.5vw;
  padding: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.8vw;
    color: ${colors.white};
  }

  ${(props) =>
    css`
      background-color: ${props.backgroudColor};
    `};

  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `};

  cursor: crosshair;
`;
