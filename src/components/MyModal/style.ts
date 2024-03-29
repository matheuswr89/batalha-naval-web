import styled from "styled-components";
import colors from "../../styles/colors";

interface ModalProps {
  color: string;
}

export const Div = styled.div`
  width: 100%;
  height: 101%;
  background-color: ${colors.shadow};
  position: absolute;
  display: grid;
  place-items: center;
  margin-top: -80px;
`;

export const Modal = styled.div<ModalProps>`
  background-color: ${(props) => props.color};
  color: ${colors.black};
  width: 500px;
  height: 15vw;
  display: grid;
  place-items: center;
`;

export const ModalContent = styled.div`
  display: grid;
  place-items: center;
`;
