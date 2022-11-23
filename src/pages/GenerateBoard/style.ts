import styled from "styled-components";
import colors from "../../styles/colors";
import DefaultPage from "../_DefaultPage";

export const Container = styled(DefaultPage)``;

export const DivWhite = styled.div`
  background-color: #fff;
  max-width: 1300px;
  border-radius: 10px;
  padding: 10px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 55px;
  background: ${colors.blue};
  border: 3px solid ${colors.default};
  font-weight: 400;
  font-size: 26px;
  color: ${colors.default};
  cursor: pointer;
  @media screen and (max-width: 450px) {
    width: 150px;
    height: 40px;
    font-size: 15px;
  }
  transition: 0.2s ease-in;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Map = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
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
