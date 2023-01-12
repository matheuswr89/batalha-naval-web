import styled from "styled-components";
import colors from "../../styles/colors";

export const ContainerAllFields = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DivStartGame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ContainerBattleField = styled.div`
  padding: 0.5vw 1vw;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ContainerPlayerTurn = styled.div<{ isPlayerTurn: boolean }>`
  display: flex;
  margin-bottom: 0.6vw;
  margin-left: 1vw;
  align-items: center;

  .playerTurn {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.isPlayerTurn ? colors.green : colors.red};
  }

  span {
    margin-left: 1vw;
    font-size: 20px;
  }
`;

export const OtherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 15px;
`;
