import { useNavigate } from "react-router-dom";
import { Button, Container, Input, Text } from "./style";

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nickname: string = e.target.nickname.value;
    if (nickname.trim().length > 0) {
      navigate("/board", { state: { nickname } });
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
