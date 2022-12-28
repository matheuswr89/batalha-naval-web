import styled from "styled-components";
import colors from "../../styles/colors";
import DefaultPage from "../_DefaultPage";

export const Container = styled(DefaultPage)``;

export const DivImg = styled.div`
  width: 100%;
  max-width: 655px;
  height: 100%;
  max-height: 485px;
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  p {
    position: absolute;
    padding: 20px;
    font-size: 25px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
