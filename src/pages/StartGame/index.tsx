import { useLocation } from "react-router-dom";
import Board from "../../components/Board";
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
} from "./style";

const StartGame = () => {
  const { state } = useLocation();
  const { nickname, board } = state;

  console.log("Board", board);
  return (
    <DefaultPage text={`${nickname} 3 x 2 RUANITO`}>
      <DivWhite>
        <ContainerAllFields>
          <ContainerBattleField>
            <Board matriz={board} clickable={false} />
          </ContainerBattleField>
          <ContainerBattleField>
            <Board matriz={board} clickable={false} />
          </ContainerBattleField>
        </ContainerAllFields>
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
    </DefaultPage>
  );
};

export default StartGame;
