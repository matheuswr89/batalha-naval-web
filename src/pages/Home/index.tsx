import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { Button, Container, Input, Text } from "./style";
const Home = ({ socket }: any) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    const room = uuid();
    e.preventDefault();
    const username: string = e.target.nickname.value;
    if (username.trim().length > 0) {
      socket.emit("join", { username, room });
      navigate("/loading", { state: { username, room } });
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
