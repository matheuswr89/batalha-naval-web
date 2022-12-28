import styled from "styled-components";

export const Container = styled.div`
  height: calc(91vh - 4px);
  display: grid;
  place-items: center;
  @media screen and (max-width: 1366px) {
    height: calc(87vh - 4px);
  }
`;
