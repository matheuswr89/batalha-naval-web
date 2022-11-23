import logo from "../../assets/icon.png";
import { Container, ContainerTexts, Image, Link } from "./style";

const Header = () => {
  return (
    <Container>
      <ContainerTexts>
        <Image src={logo} />
        <Link href="/">Batalha Naval</Link>
      </ContainerTexts>
    </Container>
  );
};

export default Header;
