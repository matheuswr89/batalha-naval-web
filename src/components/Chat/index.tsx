import { useLayoutEffect, useState } from "react";
import { MdSend } from "react-icons/md";
import {
  Button,
  ChatBody,
  ContainerChat,
  FieldText,
  Input,
  Message,
} from "./style";

interface IMessage {
  id: number;
  myMessage: boolean;
  message: string;
}

const Chat = ({ socket, id, room }: any) => {
  const [messageChat, setMessageChat] = useState<IMessage[]>([]);
  let key = 0;
  let passei = 0;
  socket.off("receiver-msg").on("receiver-msg", (res: any) => {
    if (passei < 1) {
      setMessageChat((oldArray) => [
        ...oldArray,
        {
          id: messageChat.length + 1,
          myMessage: id === res.id,
          message: res.msg,
        },
      ]);
      passei++;
    }
  });
  useLayoutEffect(() => {
    const div: HTMLElement | null = document.getElementById("chat");
    if (div) div.scrollTop = div.scrollHeight;
  }, [messageChat]);
  const sendMsg = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = e.target.msg.value;
    if (msg.trim().length > 0) {
      socket.emit("chat", { data: { msg, id }, room });
      e.target.msg.value = "";
    }
  };
  return (
    <ContainerChat>
      <h1>CHAT</h1>
      <ChatBody id="chat">
        {messageChat.map((message: IMessage) => (
          <Message myMessage={message.myMessage} key={++key}>
            <span>{message.message}</span>
          </Message>
        ))}
      </ChatBody>
      <FieldText onSubmit={sendMsg}>
        <Input name="msg" placeholder="Escreva sua mensagem..." />
        <Button type="submit" className="input-icon">
          <MdSend size={35} className="hover-icon" />
        </Button>
      </FieldText>
    </ContainerChat>
  );
};

export default Chat;
