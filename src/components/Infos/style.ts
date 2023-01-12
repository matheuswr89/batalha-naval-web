import styled from "styled-components";
import colors from "../../styles/colors";

export const Flex = styled.div<any>`
  display: flex;
  flex-direction: row;
  margin-left: 28px;
  align-items: center;
  width: ${(props) => props.size};
`;

export const OtherFlex = styled.div<any>`
  display: flex;
  flex-direction: row;
  margin-left: 28px;
  align-items: center;
  width: ${(props) => props.size};
`;

export const DivFlexInverse = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin-left: 29px;
`;

export const FlexInverse = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TransparentSquare = styled.div`
  width: 2.5vw;
  height: 2.5vw;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  padding: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  span {
    font-size: 1.8vw;
    color: ${colors.white};
  }
`;

export const OtherFlexInverse = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h1`
  font-weight: 400;
  font-size: 1.5vw;
  color: ${colors.black};
`;

export const Span = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5vh;
`;

export const DivInverse = styled.div`
  display: flex;
  flex-direction: column;
`;
