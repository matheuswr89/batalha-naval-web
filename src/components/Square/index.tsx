import React from "react";
import { SquareContainer } from "./style";
import waves from "../../assets/wave.svg";

interface SquareProps {
  backgroudColor: string;
  margin?: string;
  letter?: string;
  isAdversary?: boolean;
}

const Square: React.FC<SquareProps> = ({
  backgroudColor,
  letter,
  margin,
  isAdversary,
}) => (
  <SquareContainer backgroudColor={backgroudColor} margin={margin}>
    {isAdversary && <img src={waves} alt="waves" />}
    {letter && <span>{letter.toUpperCase()}</span>}
  </SquareContainer>
);

export default Square;
