import React, { useState } from "react";
import waves from "../../assets/wave.svg";

import bomb from "../../assets/bomb.svg";
import colors from "../../styles/colors";
import { SquareContainer } from "./style";

interface SquareProps {
  backgroudColor: string;
  margin?: string;
  letter?: string;
  isAdversary?: boolean;
  x?: number;
  y?: number;
  socket?: any;
  room?: string;
  id?: string;
}

const Square: React.FC<SquareProps> = ({
  backgroudColor,
  letter = "",
  margin,
  isAdversary,
  x = -1,
  y = -1,
  socket,
  room,
  id,
}) => {
  const [clicou, setClicou] = useState(false);
  const enviaPosicao = () => {
    if (x >= 0 && y >= 0) {
      if (!clicou) {
        setClicou(!clicou);
        socket.emit("alter_board", { room, x, y, id });
      }
    }
  };

  return (
    <SquareContainer
      backgroudColor={!clicou ? backgroudColor : colors.blueMap}
      margin={margin}
      onClick={enviaPosicao}
    >
      {!clicou && isAdversary && <img src={waves} alt="waves" />}
      {letter === "W" && <img src={bomb} alt="bomb" />}
      {letter !== "W" && letter !== "Q" && !isAdversary && (
        <span>{letter.toUpperCase()}</span>
      )}
    </SquareContainer>
  );
};

export default Square;
