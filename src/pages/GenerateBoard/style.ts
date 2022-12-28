import styled from "styled-components";
import colors from "../../styles/colors";
import DefaultPage from "../_DefaultPage";

export const Container = styled(DefaultPage)``;

export const Map = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 1vw;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-left: 15px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 28px;
  width: 160px;
  align-items: center;
  @media screen and (max-width: 456px) {
    margin-top: 20px;
    width: 120px;
    margin-left: 18px;
    margin-right: 10px;
  }
`;

export const OtherFlex1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 28px;
  width: 110px;
  align-items: center;
  @media screen and (min-width: 1366px) {
    width: 160px;
  }
  @media screen and (max-width: 456px) {
    margin-top: 20px;
    width: 120px;
    margin-left: 18px;
    margin-right: 10px;
  }
`;
export const OtherFlex = styled.div`
  display: flex;
  flex-direction: row;
  width: 95px;
  align-items: center;
  @media screen and (max-width: 456px) {
    margin-top: 20px;
    width: 120px;
    margin-left: 18px;
    margin-right: 10px;
  }
`;

export const FlexInverse = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1366px) {
    margin-left: 40%;
  }
  @media screen and (max-width: 1366px) {
    margin-left: 36%;
  }
  @media screen and (max-width: 510px) {
    margin-left: 30%;
  }
  @media screen and (max-width: 456px) {
    margin-left: 39%;
  }
  @media screen and (max-width: 413px) {
    margin-left: 35%;
  }
  @media screen and (max-width: 355px) {
    margin-left: 32%;
  }
`;

export const OtherFlexInverse = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1366px) {
    margin-left: 40%;
  }
  @media screen and (max-width: 1366px) {
    margin-left: 46%;
  }
  @media screen and (max-width: 510px) {
    margin-left: 46%;
  }
  @media screen and (max-width: 456px) {
    margin-left: 39%;
  }
  @media screen and (max-width: 413px) {
    margin-left: 35%;
  }
  @media screen and (max-width: 355px) {
    margin-left: 32%;
  }
`;

export const Text = styled.h1`
  font-weight: 400;
  font-size: 24px;
  color: ${colors.black};
  @media screen and (max-width: 456px) {
    font-size: 18px;
  }
`;

export const Span = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const DivInverse = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
