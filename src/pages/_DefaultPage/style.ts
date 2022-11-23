import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw- 0.001px);
  height: calc(85vh - 10px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: inherit;
  @media screen and (max-width: 950px) {
    height: 100%;
  }
`;
