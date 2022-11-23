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
  padding: 10px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 570px;
  align-self: flex-end;
  margin-top: 15px;
  @media screen and (max-width: 950px) {
    margin-top: 20px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 48px;
  width: 200px;
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

  @media screen and (max-width: 510px) {
    margin-left: 35%;
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
  @media screen and (min-width: 511px) {
    margin-left: 39%;
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
