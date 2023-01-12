import styled from "styled-components";
import DefaultPage from "../_DefaultPage";

export const Container = styled(DefaultPage)``;

export const Map = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5vw;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-left: 15px;
  justify-content: center;
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
