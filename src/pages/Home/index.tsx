import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { Button, Container, Input, Text } from "./style";
const Home = ({ socket }: any) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: string = e.target.nickname.value;
    if (user.trim().length > 0) {
      socket.emit("join", { user, room: uuid() });
      navigate("/loading", { state: { user } });
    } else alert("Forneça um nickname");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Text>Informe o seu nome</Text>
        <Input
          name="nickname"
          type="text"
          placeholder="Digite o seu nome...."
        />
        <Button type="submit">Inciar partida</Button>
      </form>
    </Container>
  );
};

export default Home;
