import parse from "html-react-parser";
import useSound from "use-sound";
import lossSound from "../../assets/lose.mp3";
import winSound from "../../assets/win.mp3";
import colors from "../../styles/colors";
import ButtonDefault from "../ButtonDefault";
import { Div, Modal, ModalContent } from "./style";

const MyModal = ({ open, text, title, socket, id }: any) => {
  const cor = title.includes("ganhou") ? colors.green : colors.red;
  const [playWinSound] = useSound(winSound);
  const [playLoseSound] = useSound(lossSound);

  if (title.includes("ganhou")) playWinSound();
  if (title.includes("perdeu")) playLoseSound();

  return (
    (open && (
      <Div>
        <Modal color={cor}>
          <h1>{title}</h1>
          <ModalContent>
            {parse(text)}
            <ButtonDefault
              text="Voltar para a tela inicial"
              onClick={() => socket.emit("exit", id)}
              typeButton="secondary"
              size="360px"
            />
          </ModalContent>
        </Modal>
      </Div>
    )) || <></>
  );
};

export default MyModal;
