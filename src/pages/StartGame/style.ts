import styled from "styled-components";
import colors from "../../styles/colors";

export const ContainerAllFields = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContainerBattleField = styled.div`
  flex: 1;
  padding: 10px;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerPlayerTurn = styled.div<{ isPlayerTurn: boolean }>`
  display: flex;
  width: 100%;
  margin: 0px 20px 15px;
  align-items: center;

  .playerTurn {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.isPlayerTurn ? colors.green : colors.red};
  }

  span {
    margin-left: 10px;
    font-size: 20px;
  }
`;

export const OtherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 30px;
`;
