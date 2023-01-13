import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import navio from "../../assets/navioGif.gif";
import { Container, DivImg } from "./style";

const Loading = ({ socket }: any) => {
  const [roomDefault, setRoom] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { username, id, board, message, room } = state;

  socket.off("id_room").on("id_room", (resp: string) => {
    if (resp.includes("room:")) setRoom(resp.split("room: ")[1]);
  });

  socket.on("room_message", (resp: any) => {
    console.log(id);
    navigate("/board", {
      state: { username, room: roomDefault, id: socket.id },
    });
  });

  socket.off("send_board").on("send_board", (resp: any) => {
    console.log(id);
    if (resp.jogador1.board !== undefined && resp.jogador2.board !== undefined)
      navigate("/game", { state: { username, board, id, room } });
  });

  return (
    <Container>
      <DivImg>
        <p>
          {message ? message : "aguarde outro jogador entrar na partida..."}
        </p>
        <img src={navio} />
      </DivImg>
    </Container>
  );
};

export default Loading;
