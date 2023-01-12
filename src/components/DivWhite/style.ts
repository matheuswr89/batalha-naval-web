import styled from "styled-components";

export const DivWhiteContainer = styled.div`
  background-color: #fff;
  max-width: 1250px;
  min-width: 300px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1040px) {
    max-width: 550px;
  }
`;
