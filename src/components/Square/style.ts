import styled, { css } from "styled-components";
import colors from "../../styles/colors";

interface SquareProps {
  backgroudColor: string;
  margin?: string;
}

export const SquareContainer = styled.div<SquareProps>`
  width: 43.72px;
  height: 43.72px;
  padding: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 30px;
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

  @media screen and (max-width: 1366px) {
    width: 35px;
    height: 35px;
    span {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 412px) {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 355px) {
    width: 25px;
    height: 25px;
  }
`;
