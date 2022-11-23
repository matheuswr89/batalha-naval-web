import { useState } from "react";
import { useLocation } from "react-router-dom";
import Board from "../../components/Board";
import { Square } from "../../components/Board/style";
import colors from "../../styles/colors";
import {
  Button,
  Container,
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

  return (
    <Container>
      <DivWhite>
        <Button onClick={() => getNewMap()}>Gerar novo mapa</Button>
        <Map>
          <Board matriz={board[indice]} clickable={false} />
          <Div>
            <Span>
              <DivInverse>
                <Flex>
                  <Square backgroudColor={colors.default} margin="2px" />
                  <Square backgroudColor={colors.default} margin="2px" />
                  <Square backgroudColor={colors.default} margin="2px" />
                </Flex>
                <FlexInverse>
                  <Square backgroudColor={colors.default} margin="2px" />
                  <Square backgroudColor={colors.default} margin="2px" />
                </FlexInverse>
              </DivInverse>
              <Text>1x contratorpedeiro</Text>
            </Span>

            <Span>
              <Flex>
                <Square backgroudColor={colors.default} margin="2px" />
                <Square backgroudColor={colors.default} margin="2px" />
                <Square backgroudColor={colors.default} margin="2px" />
                <Square backgroudColor={colors.default} margin="2px" />
              </Flex>
              <Text>1x contratorpedeiro</Text>
            </Span>

            <Span>
              <Flex>
                <Square backgroudColor={colors.default} margin="2px" />
                <Square backgroudColor={colors.default} margin="2px" />
                <Square backgroudColor={colors.default} margin="2px" />
              </Flex>
              <Text>1x cruzador</Text>
            </Span>

            <Span>
              <Flex>
                <Square backgroudColor={colors.default} margin="2px" />
                <Square backgroudColor={colors.default} margin="2px" />
              </Flex>
              <Text>2x rebocador</Text>
            </Span>

            <Span>
              <Flex>
                <Square backgroudColor={colors.default} margin="2px" />
              </Flex>
              <Text>2x submarino</Text>
            </Span>
          </Div>
        </Map>
      </DivWhite>
    </Container>
  );
};

export default GenerateBoard;
