import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Board from "../../components/Board";
import BoardAdversary from "../../components/BoardAdversary";
import ButtonDefault from "../../components/ButtonDefault";
import Chat from "../../components/Chat";
import DivWhite from "../../components/DivWhite";
import Square from "../../components/Square";
import colors from "../../styles/colors";
import { defaultBoard } from "../GenerateBoard";
import {
  DivInverse,
  Flex,
  FlexInverse,
  OtherFlex,
  Span,
  Text,
} from "../GenerateBoard/style";
import DefaultPage from "../_DefaultPage";
import {
  ContainerAllFields,
  ContainerBattleField,
  ContainerInfo,
  ContainerPlayerTurn,
  DivStartGame,
  OtherContainer,
} from "./style";

const StartGame = ({ socket }: any) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user, board, id, room } = state;
  const [adversario, setAdversario] = useState("");
  const [boardAdversario, setBoardAdversario] = useState(defaultBoard);
  const [myBoard, setMyBoard] = useState(defaultBoard);
  const [myTurn, setMyTurn] = useState<boolean>(false);

  socket.on("get_board", (resp: any) => {
    if (resp.jogador1.id === id) {
      setAdversario(resp.jogador2.name);
      setBoardAdversario(resp.jogador2.board);
    } else {
      setAdversario(resp.jogador1.name);
      setBoardAdversario(resp.jogador1.board);
    }
    setMyBoard(board);
  });
  socket.on("send_board", (resp: any) => {
    if (resp.jogador1.id === id) {
      setBoardAdversario(resp.jogador2.board);
      setMyBoard(resp.jogador1.board);
    } else {
      setBoardAdversario(resp.jogador1.board);
      setMyBoard(resp.jogador2.board);
    }
  });
  socket.on("disconected", () => {
    navigate("/loading", { state: { user } });
  });
  useEffect(() => {
    setMyTurn(false);
  }, []);

  return (
    <DefaultPage text={`${user} 3 x 2 ${adversario}`}>
      <DivStartGame>
        <DivWhite>
          <ContainerAllFields>
            <ContainerBattleField key={0}>
              <BoardAdversary
                matriz={boardAdversario}
                room={room}
                socket={socket}
                id={id}
              />
            </ContainerBattleField>
            <ContainerBattleField key={1}>
              <Board matriz={myBoard} />
            </ContainerBattleField>
          </ContainerAllFields>
          <ContainerPlayerTurn isPlayerTurn={myTurn}>
            <div className="playerTurn" />
            <span>{myTurn ? "SUA VEZ DE JOGAR" : "VEZ DO OPONENTE"}</span>
          </ContainerPlayerTurn>
          <ContainerInfo>
            <div>
              <Span>
                <OtherFlex>
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
                </OtherFlex>
                <Text>2x rebocador</Text>
              </Span>
              <Span>
                <OtherFlex>
                  <Square
                    backgroudColor={colors.default}
                    margin="2px"
                    letter="s"
                  />
                </OtherFlex>
                <Text>2x submarino</Text>
              </Span>
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
          </ContainerInfo>
        </DivWhite>
        <OtherContainer>
          <Chat />
          <ButtonDefault
            onClick={() => {}}
            text="Sair da partida"
            typeButton="primary"
          />
        </OtherContainer>
      </DivStartGame>
    </DefaultPage>
  );
};

export default StartGame;
