import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Board from "../../components/Board";
import ButtonDefault from "../../components/ButtonDefault";
import Square from "../../components/Square";
import colors from "../../styles/colors";
import {
  Container,
  ContainerButtons,
  Div,
  DivInverse,
  DivWhite,
  Flex,
  FlexInverse,
  Map,
  Span,
  Text,
} from "./style";

const GenerateBoard = () => {
  const { state } = useLocation();
  const { nickname } = state;
  const [indice, setIndice] = useState(0);
  const navigate = useNavigate();
  const board = [
    [
      ["0", "0", "0", "0", "0", "0", "0", "A", "A", "A"],
      ["D", "D", "D", "0", "0", "0", "0", "0", "A", "S"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "A", "0"],
      ["0", "0", "0", "0", "F", "F", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "C", "C", "C", "C", "0", "0", "0", "0", "0"],
      ["S", "F", "F", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "S"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ],
    [
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "S", "0", "0", "0", "0"],
      ["F", "F", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["S", "0", "0", "A", "A", "A", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "A", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "A", "0", "0", "0", "F", "F"],
      ["0", "0", "0", "D", "D", "D", "0", "0", "0", "S"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "C", "C", "C", "C", "0", "0", "0", "0", "0"],
    ],
    [
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "D", "D", "D", "0"],
      ["F", "F", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["C", "C", "C", "C", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "A", "A", "A", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "A", "0", "0", "0", "0", "0"],
      ["F", "F", "0", "0", "A", "0", "0", "0", "0", "0"],
      ["0", "0", "S", "0", "0", "0", "0", "0", "0", "0"],
      ["S", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "S", "0", "0", "0", "0", "0", "0", "0", "0"],
    ],
  ];

  const getNewMap = () => {
    setIndice(Math.floor(Math.random() * board.length));
  };

  const goNewGame = () => {
    navigate("/game", { state: { nickname } });
  };

  return (
    <Container>
      <DivWhite>
        <Map>
          <Board matriz={board[indice]} clickable={false} />
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
    </Container>
  );
};

export default GenerateBoard;
