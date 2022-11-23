import React, { ReactNode } from "react";
import { DivWhiteContainer } from "./style";

interface IProps {
  children?: ReactNode;
}

const DivWhite = ({ children }: IProps) => (
  <DivWhiteContainer>{children}</DivWhiteContainer>
);

export default DivWhite;
