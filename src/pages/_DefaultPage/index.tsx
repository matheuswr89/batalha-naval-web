import { ReactNode } from "react";
import navio1 from "../../assets/navio1.png";
import navio2 from "../../assets/navio2.png";

import Header from "../../components/Header";
import { Container } from "./style";
interface IProps {
  children?: ReactNode;
  text?: string;
}

const DefaultPage = ({ children, text }: IProps) => {
  return (
    <>
      <Header text={text} />
      <Container>
        <img src={navio1} alt="Navio 1" className="navio1" />
        {children}
        <img src={navio2} alt="Navio 2" className="navio2" />
      </Container>
    </>
  );
};

export default DefaultPage;
