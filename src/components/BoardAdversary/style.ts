import styled from "styled-components";

export const BoardTable = styled.table`
  cursor: crosshair;
`;

export const TD = styled.td`
  font-weight: 400;
  font-size: 26px;
  padding-right: 10px;
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
