import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import navio from "../../assets/navioGif.gif";
import { Container, DivImg } from "./style";

const Loading = ({ socket }: any) => {
  const [roomDefault, setRoom] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user, id, board, message, room } = state;

  socket.on("id_room", (resp: string) => {
    if (resp.includes("room:")) setRoom(resp.split("room: ")[1]);
  });

  socket.on("room_message", (resp: any) => {
    navigate("/board", { state: { user, room: roomDefault, id: socket.id } });
  });

  socket.on("send_board", (resp: any) => {
    if (resp.jogador1.board !== undefined && resp.jogador2.board !== undefined)
      navigate("/game", { state: { user, board, id, room } });
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
