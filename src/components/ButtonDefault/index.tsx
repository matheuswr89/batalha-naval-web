import React from "react";
import { Container } from "./style";

interface IButtonProps {
  text: string;
  onClick: () => void;
  typeButton?: "primary" | "secondary";
}

const ButtonDefault: React.FC<IButtonProps> = ({
  text,
  onClick,
  typeButton = "primary",
}) => (
  <Container primaryButton={typeButton === "primary"} onClick={onClick}>
    {text}
  </Container>
);

export default ButtonDefault;
