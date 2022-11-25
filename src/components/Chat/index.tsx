import React, { useState, useEffect } from "react";
import { ChatBody, ContainerChat, FieldText, Message } from "./style";
import { MdSend } from "react-icons/md";

interface IMessage {
  id: number;
  user: string;
  myMessage: boolean;
  message: string;
}

const Chat = () => {
  const [messageChat, setMessageChat] = useState<Array<IMessage>>(
    [] as Array<IMessage>
  );

  useEffect(() => {
    setMessageChat([
      {
        id: 1,
        user: "Ruanito",
        myMessage: false,
        message: "Mensagem do player 1",
      },
      {
        id: 2,
        user: "Ruanito",
        myMessage: false,
        message: "Mensagem do player 1",
      },
      {
        id: 3,
        user: "Osvaldo",
        myMessage: true,
        message: "Minha mensagem",
      },
    ]);
  }, []);

  return (
    <ContainerChat>
      <h1>CHAT</h1>
      <ChatBody>
        {messageChat.map((message: IMessage) => (
          <Message myMessage={message.myMessage}>
            <span>{message.message}</span>
          </Message>
        ))}
      </ChatBody>
      <FieldText>
        <textarea placeholder="Escreva sua mensagem..." name="fieldText" />
        <MdSend size={35} />
      </FieldText>
    </ContainerChat>
  );
};

export default Chat;
