import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSound from "use-sound";
import hitSound from "../../assets/hit.mp3";
import missSound from "../../assets/miss.mp3";
import Board from "../../components/Board";
import BoardAdversary from "../../components/BoardAdversary";
import ButtonDefault from "../../components/ButtonDefault";
import Chat from "../../components/Chat";
import DivWhite from "../../components/DivWhite";
import Infos from "../../components/Infos";
import MyModal from "../../components/MyModal/MyModal";
import { defaultBoard } from "../GenerateBoard";
import DefaultPage from "../_DefaultPage";
import {
  ContainerAllFields,
  ContainerBattleField,
  ContainerInfo,
  ContainerPlayerTurn,
  DivStartGame,
  OtherContainer,
} from "./style";
const StartGame = ({ socket }: any) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { board, id, room } = state;
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [adversario, setAdversario] = useState("");
  const [eu, setEu] = useState("");
  const [boardAdversario, setBoardAdversario] = useState(defaultBoard);
  const [placar, setPlacar] = useState(0);
  const [placarAdversario, setPlacarAdversario] = useState(0);
  const [myBoard, setMyBoard] = useState(defaultBoard);
  const [myTurn, setMyTurn] = useState<boolean>(false);
  const [playHitSound] = useSound(hitSound);
  const [playMissSound] = useSound(missSound);

  socket.off("get_board").on("get_board", (resp: any) => {
    if (resp.jogador1.id === id) {
      setMyTurn(resp.jogador1.myturn);
      setBoardAdversario(resp.jogador2.board);
    } else {
      setMyTurn(resp.jogador2.myturn);
      setBoardAdversario(resp.jogador1.board);
    }
    setPlacar(resp.jogador1.placar);
    setPlacarAdversario(resp.jogador2.placar);
    setEu(resp.jogador1.name);
    setAdversario(resp.jogador2.name);
    setMyBoard(board);
  });
  socket.off("send_board").on("send_board", (resp: any) => {
    let acertos,
      cliques,
      msgT = "Que pena, você perdeu!",
      status = "perdeu";
    if (resp.jogador1.id === id) {
      setBoardAdversario(resp.jogador2.board);
      setMyBoard(resp.jogador1.board);
      setMyTurn(resp.jogador1.myturn);
      if (resp.jogador2.ganhou !== -1) {
        acertos = resp.jogador2.acertos;
        cliques = resp.jogador2.cliques;
        if (resp.jogador2.ganhou) {
          msgT = "Parabéns, você ganhou!";
          status = "ganhou";
        }
      }
    } else {
      setBoardAdversario(resp.jogador1.board);
      setMyBoard(resp.jogador2.board);
      setMyTurn(resp.jogador2.myturn);
      if (resp.jogador1.ganhou !== -1) {
        acertos = resp.jogador1.acertos;
        cliques = resp.jogador1.cliques;
        if (resp.jogador1.ganhou) {
          msgT = "Parabéns, você ganhou!";
          status = "ganhou";
        }
      }
    }
    if (resp.jogador1.ganhou !== -1 && resp.jogador2.ganhou !== -1) {
      const calculo = (acertos * 100) / cliques;
      setOpen(true);
      setTitle(msgT);
      setText(
        `<p>Você ${status} com ${
          !isNaN(calculo) ? calculo.toFixed(2) : 0
        }% de taxa de acertos.</p><br/><p>Tentativas: ${cliques}
        </p><br/><p>Acertos: ${acertos}</p>`
      );
    }

    if (!resp.acertou) playMissSound();
    else playHitSound();

    setPlacar(resp.jogador1.placar);
    setPlacarAdversario(resp.jogador2.placar);
    setEu(resp.jogador1.name);
    setAdversario(resp.jogador2.name);
  });
  socket.off("disconected").on("disconected", () => {
    navigate("/");
  });
  useEffect(() => {
    setMyTurn(false);
  }, []);
  const sairFunction = () => {
    socket.emit("exit", id);
  };
  return (
    <DefaultPage text={`${eu} ${placar} x ${placarAdversario} ${adversario}`}>
      <MyModal open={open} text={text} title={title} socket={socket} id={id} />
      <DivStartGame>
        <DivWhite>
          <ContainerAllFields>
            <ContainerBattleField key={0}>
              <BoardAdversary
                matriz={boardAdversario}
                room={room}
                socket={socket}
                id={id}
                turn={myTurn}
              />
            </ContainerBattleField>
            <ContainerBattleField key={1}>
              <Board matriz={myBoard} />
            </ContainerBattleField>
          </ContainerAllFields>
          <ContainerPlayerTurn isPlayerTurn={myTurn}>
            <div className="playerTurn" />
            <span>{myTurn ? "SUA VEZ DE JOGAR" : "VEZ DO OPONENTE"}</span>
          </ContainerPlayerTurn>
          <ContainerInfo>
            <Infos type={true} />
          </ContainerInfo>
        </DivWhite>
        <OtherContainer>
          <Chat socket={socket} id={id} room={room} />
          <ButtonDefault
            onClick={() => sairFunction()}
            text="Sair da partida"
            typeButton="primary"
          />
        </OtherContainer>
      </DivStartGame>
    </DefaultPage>
  );
};

export default StartGame;
