import styled from "styled-components";
import colors from "../../styles/colors";

export const ContainerChat = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  max-width: 280px !important;
  width: 21vw;
  height: 80vh;
  max-height: 550px;
  border-radius: 10px;
  h1 {
    font-size: 48px;
  }
`;

export const ChatBody = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid ${colors.default};
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: auto;
`;

interface IPropsMessage {
  myMessage: boolean;
}

export const Message = styled.div<IPropsMessage>`
  padding: 5px 10px;
  background-color: ${(props) =>
    props.myMessage ? colors.darkBlue : colors.blue};
  border-radius: 10px;
  margin: 5px 5px;
  align-self: ${(props) => (props.myMessage ? "flex-end" : "flex-start")};
  width: 130px;
  overflow-wrap: break-word;
  span {
    font-size: 16px;
    color: ${colors.white};
  }
`;

export const FieldText = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  textarea {
    width: 85%;
    align-self: flex-start;
    margin-top: 10px;
    border-radius: 5px;
    padding: 5px 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 0.2rem;
  padding: 0.5rem;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
`;
