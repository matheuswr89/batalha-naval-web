import React from "react";
import { SquareContainer } from "./style";

interface SquareProps {
  backgroudColor: string;
  margin?: string;
  letter?: string;
}

const Square: React.FC<SquareProps> = ({ backgroudColor, letter, margin }) => (
  <SquareContainer backgroudColor={backgroudColor} margin={margin}>
    {letter && <span>{letter.toUpperCase()}</span>}
  </SquareContainer>
);

export default Square;
