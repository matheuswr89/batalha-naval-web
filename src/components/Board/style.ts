import styled, { css } from "styled-components";

interface SquareProps {
  backgroudColor: string;
  margin?: string;
}

export const BoardTable = styled.table`
  cursor: crosshair;
`;

export const Square = styled.div<SquareProps>`
  width: 43.72px;
  height: 43.72px;
  padding: 0 !important;
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
  @media screen and (max-width: 510px) {
    width: 35px;
    height: 35px;
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

export const TD = styled.td`
  font-weight: 400;
  font-size: 26px;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 26px;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
