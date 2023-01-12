import colors from "../../styles/colors";
import Square from "../Square";
import {
  DivFlexInverse,
  DivInverse,
  Flex,
  FlexInverse,
  OtherFlex,
  Span,
  Text,
  TransparentSquare,
} from "./style";

const Infos = ({ type = false }: any) => {
  return (
    (!type && (
      <>
        <Span>
          <DivInverse>
            <Flex size="12vw">
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="P"
              />
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="P"
              />
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="P"
              />
            </Flex>
            <DivFlexInverse>
              <FlexInverse>
                <TransparentSquare>
                  <span>P</span>
                </TransparentSquare>
                <TransparentSquare>
                  <span>P</span>
                </TransparentSquare>
              </FlexInverse>
              <FlexInverse>
                <Square
                  backgroudColor={colors.default}
                  margin=".1vw"
                  letter="P"
                />
                <Square
                  backgroudColor={colors.default}
                  margin=".1vw"
                  letter="P"
                />
              </FlexInverse>
              <FlexInverse>
                <TransparentSquare>
                  <span>P</span>
                </TransparentSquare>
                <TransparentSquare>
                  <span>P</span>
                </TransparentSquare>
              </FlexInverse>
            </DivFlexInverse>
          </DivInverse>
          <Text>1x porta-aviões</Text>
        </Span>

        <Span>
          <Flex size="12vw">
            <Square backgroudColor={colors.default} margin=".1vw" letter="C" />
            <Square backgroudColor={colors.default} margin=".1vw" letter="C" />
            <Square backgroudColor={colors.default} margin=".1vw" letter="C" />
            <Square backgroudColor={colors.default} margin=".1vw" letter="C" />
          </Flex>
          <Text>1x contratorpedeiro</Text>
        </Span>

        <Span>
          <Flex size="12vw">
            <Square backgroudColor={colors.default} margin=".1vw" letter="z" />
            <Square backgroudColor={colors.default} margin=".1vw" letter="z" />
            <Square backgroudColor={colors.default} margin=".1vw" letter="z" />
          </Flex>
          <Text>1x cruzador</Text>
        </Span>

        <Span>
          <Flex size="12vw">
            <Square backgroudColor={colors.default} margin=".1vw" letter="r" />
            <Square backgroudColor={colors.default} margin=".1vw" letter="r" />
          </Flex>
          <Text>2x rebocador</Text>
        </Span>

        <Span>
          <Flex size="12vw">
            <Square backgroudColor={colors.default} margin=".1vw" letter="s" />
          </Flex>
          <Text>2x submarino</Text>
        </Span>
      </>
    )) ||
    (type && (
      <>
        <div>
          <Span>
            <OtherFlex size="6vw">
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="r"
              />
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="r"
              />
            </OtherFlex>
            <Text>2x rebocador</Text>
          </Span>

          <Span>
            <OtherFlex size="6vw">
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="s"
              />
            </OtherFlex>
            <Text>2x submarino</Text>
          </Span>
        </div>
        <div>
          <Span>
            <Flex size="11vw">
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="C"
              />
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="C"
              />
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="C"
              />
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="C"
              />
            </Flex>
            <Text>1x contratorpedeiro</Text>
          </Span>

          <Span>
            <Flex size="11vw">
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="z"
              />
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="z"
              />
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="z"
              />
            </Flex>
            <Text>1x cruzador</Text>
          </Span>
        </div>

        <Span>
          <DivInverse>
            <Flex size="8.1vw">
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="P"
              />
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="P"
              />
              <Square
                backgroudColor={colors.default}
                margin=".1vw"
                letter="P"
              />
            </Flex>
            <DivFlexInverse>
              <FlexInverse>
                <TransparentSquare>
                  <span>P</span>
                </TransparentSquare>
                <TransparentSquare>
                  <span>P</span>
                </TransparentSquare>
              </FlexInverse>
              <FlexInverse>
                <Square
                  backgroudColor={colors.default}
                  margin=".1vw"
                  letter="P"
                />
                <Square
                  backgroudColor={colors.default}
                  margin=".1vw"
                  letter="P"
                />
              </FlexInverse>
              <FlexInverse>
                <TransparentSquare>
                  <span>P</span>
                </TransparentSquare>
                <TransparentSquare>
                  <span>P</span>
                </TransparentSquare>
              </FlexInverse>
            </DivFlexInverse>
          </DivInverse>
          <Text>1x porta-aviões</Text>
        </Span>
      </>
    ))
  );
};

export default Infos;
