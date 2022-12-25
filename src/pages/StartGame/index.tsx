import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Board from "../../components/Board";
import BoardAdversary from "../../components/BoardAdversary";
import ButtonDefault from "../../components/ButtonDefault";
import Chat from "../../components/Chat";
import DivWhite from "../../components/DivWhite";
import Square from "../../components/Square";
import colors from "../../styles/colors";
import {
  DivInverse,
  Flex,
  FlexInverse,
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
  const [adversario, setAdversario] = useState("");
  const { state } = useLocation();
  const [myTurn, setMyTurn] = useState<boolean>(false);
  const { user, board } = state;

  socket.on("send_board", (resp: any) => {
    if (resp["jogador1"] !== user) setAdversario(resp["jogador1"]);
    else setAdversario(resp["jogador2"]);
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
              <BoardAdversary matriz={board} clickable={false} />
            </ContainerBattleField>
            <ContainerBattleField key={1}>
              <Board matriz={board} clickable={false} />
            </ContainerBattleField>
          </ContainerAllFields>
          <ContainerPlayerTurn isPlayerTurn={myTurn}>
            <div className="playerTurn" />
            <span>{myTurn ? "SUA VEZ DE JOGAR" : "VEZ DO OPONENTE"}</span>
          </ContainerPlayerTurn>
          <ContainerInfo>
            <div>
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
