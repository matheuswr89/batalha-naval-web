import React from "react";
import { Container } from "./style";

interface IButtonProps {
  text: string;
  onClick: () => void;
  typeButton?: "primary" | "secondary";
  size?: string;
}

const ButtonDefault: React.FC<IButtonProps> = ({
  text,
  onClick,
  typeButton = "primary",
  size = "15vw",
}) => (
  <Container
    size={size}
    primaryButton={typeButton === "primary"}
    onClick={onClick}
  >
    {text}
  </Container>
);

export default ButtonDefault;
