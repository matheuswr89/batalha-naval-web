import { useNavigate } from "react-router-dom";
import colors from "../../styles/colors";
import ButtonDefault from "../ButtonDefault";
import { Div, Modal, ModalContent } from "./style";

const MyModal = ({ open, text, title, socket, id }: any) => {
  const navigate = useNavigate();
  const cor = title.includes("ganhou") ? colors.green : colors.red;
  console.log(cor);
  return (
    (open && (
      <Div>
        <Modal color={cor}>
          <h1>{title}</h1>
          <ModalContent>
            <p>{text}</p>
            <ButtonDefault
              text="Voltar para a tela inicial"
              onClick={() => socket.emit("exit", id)}
              typeButton="secondary"
              size="320px"
            />
          </ModalContent>
        </Modal>
      </Div>
    )) || <></>
  );
};

export default MyModal;
