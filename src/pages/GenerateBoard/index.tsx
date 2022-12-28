import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Board from "../../components/Board";
import ButtonDefault from "../../components/ButtonDefault";
import DivWhite from "../../components/DivWhite";
import Square from "../../components/Square";
import colors from "../../styles/colors";
import DefaultPage from "../_DefaultPage";
import {
  ContainerButtons,
  Div,
  DivInverse,
  Flex,
  FlexInverse,
  Map,
  Span,
  Text,
} from "./style";

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
  const { user, room, id } = state;
  const message = "Esperando o adversario escolher o mapa dele...";

  useEffect(() => getNewMap(), []);

  const getNewMap = () => {
    socket.emit("generate_board", { room, user, id });
    socket.on("resp_gen_board", (resp: any) => {
      if (resp.id === id) setBoard(resp.board);
    });
  };

  const goNewGame = () => {
    socket.emit("board", { room, user, board, id });
    socket.on("send_board", (resp: any) => {
      if (
        resp.jogador1.board !== undefined &&
        resp.jogador2.board !== undefined
      )
        navigate("/game", { state: { user, board, id, room } });
      else if (board !== defaultBoard)
        navigate("/loading", { state: { user, board, id, message, room } });
    });
  };

  socket.on("disconected", () => {
    navigate("/loading", { state: { user } });
  });
  return (
    <DefaultPage>
      <DivWhite>
        <Map>
          <Board matriz={board} />
          <Div>
            <Span>
              <DivInverse>
                <Flex>
                  <Square
                    backgroudColor={colors.default}
                    margin="2px"
                    letter="P"
                  />
                  <Square
                    backgroudColor={colors.default}
                    margin="2px"
                    letter="P"
                  />
                  <Square
                    backgroudColor={colors.default}
                    margin="2px"
                    letter="P"
                  />
                </Flex>
                <FlexInverse>
                  <Square
                    backgroudColor={colors.default}
                    margin="2px"
                    letter="P"
                  />
                  <Square
                    backgroudColor={colors.default}
                    margin="2px"
                    letter="P"
                  />
                </FlexInverse>
              </DivInverse>
              <Text>1x porta-aviões</Text>
            </Span>

            <Span>
              <Flex>
                <Square
                  backgroudColor={colors.default}
                  margin="2px"
                  letter="C"
                />
                <Square
                  backgroudColor={colors.default}
                  margin="2px"
                  letter="C"
                />
                <Square
                  backgroudColor={colors.default}
                  margin="2px"
                  letter="C"
                />
                <Square
                  backgroudColor={colors.default}
                  margin="2px"
                  letter="C"
                />
              </Flex>
              <Text>1x contratorpedeiro</Text>
            </Span>

            <Span>
              <Flex>
                <Square
                  backgroudColor={colors.default}
                  margin="2px"
                  letter="z"
                />
                <Square
                  backgroudColor={colors.default}
                  margin="2px"
                  letter="z"
                />
                <Square
                  backgroudColor={colors.default}
                  margin="2px"
                  letter="z"
                />
              </Flex>
              <Text>1x cruzador</Text>
            </Span>

            <Span>
              <Flex>
                <Square
                  backgroudColor={colors.default}
                  margin="2px"
                  letter="r"
                />
                <Square
                  backgroudColor={colors.default}
                  margin="2px"
                  letter="r"
                />
              </Flex>
              <Text>2x rebocador</Text>
            </Span>

            <Span>
              <Flex>
                <Square
                  backgroudColor={colors.default}
                  margin="2px"
                  letter="s"
                />
              </Flex>
              <Text>2x submarino</Text>
            </Span>
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
