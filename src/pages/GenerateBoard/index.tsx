import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Board from "../../components/Board";
import ButtonDefault from "../../components/ButtonDefault";
import DivWhite from "../../components/DivWhite";
import Infos from "../../components/Infos";
import DefaultPage from "../_DefaultPage";
import { ContainerButtons, Div, Map } from "./style";

export const defaultBoard = [
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
];

const GenerateBoard = ({ socket }: any) => {
  const [board, setBoard]: any = useState(defaultBoard);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { username, room, id } = state;
  const message = "Esperando o adversario escolher o mapa dele...";

  useEffect(() => getNewMap(), []);

  const getNewMap = () => {
    socket.emit("generate_board", { room, username, id });
    socket.off("resp_gen_board").on("resp_gen_board", (resp: any) => {
      if (resp.id === id) setBoard(resp.board);
    });
  };

  const goNewGame = () => {
    socket.emit("board", { room, username, board, id });
    socket.off("send_board").on("send_board", (resp: any) => {
      if (
        resp.jogador1.board !== undefined &&
        resp.jogador2.board !== undefined
      )
        navigate("/game", { state: { username, board, id, room } });
      else if (board !== defaultBoard)
        navigate("/loading", { state: { username, board, id, message, room } });
    });
  };

  socket.off("disconected").on("disconected", () => {
    navigate("/");
  });
  return (
    <DefaultPage>
      <DivWhite>
        <Map>
          <Board matriz={board} />
          <Div>
            <Infos />
            <ContainerButtons>
              <ButtonDefault
                onClick={() => getNewMap()}
                text="Gerar novo mapa"
              />
              <ButtonDefault
                onClick={() => goNewGame()}
                text="Ir para partida"
                typeButton="secondary"
              />
            </ContainerButtons>
          </Div>
        </Map>
      </DivWhite>
    </DefaultPage>
  );
};

export default GenerateBoard;
