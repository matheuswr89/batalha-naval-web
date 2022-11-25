import logo from "../../assets/icon.png";
import { Container, ContainerTexts, Image, Link } from "./style";

interface IProps {
  text?: string;
}

const Header = ({ text }: IProps) => {
  return (
    <Container>
      <ContainerTexts>
        <Image src={logo} />
        <Link href="/">{text ? text : "Batalha Naval"}</Link>
      </ContainerTexts>
    </Container>
  );
};

export default Header;
