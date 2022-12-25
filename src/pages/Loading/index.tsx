import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import navio from "../../assets/navioGif.gif";
import { Container, DivImg } from "./style";

const Loading = ({ socket }: any) => {
  const [room, setRoom] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user } = state;

  socket.on("room_message", (resp: any) => {
    if (resp.includes("room:")) setRoom(resp.split("room: ")[1]);
    console.log(room);
    if (resp.includes("Sala cheia"))
      navigate("/board", { state: { user, room } });
  });

  return (
    <Container>
      <DivImg>
        <p>aguarde outro jogador entrar na partida...</p>
        <img src={navio} />
      </DivImg>
    </Container>
  );
};

export default Loading;
