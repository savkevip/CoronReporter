import React from "react";
import { Container, RightContent, LogoWrapper, Logo } from "./styles";

const logoUrl = require("../../assets/logo.svg");

export default function Header({ children }) {
  return (
    <Container>
      <LogoWrapper>
        <Logo src={logoUrl} />
      </LogoWrapper>
      <RightContent>{children}</RightContent>
    </Container>
  );
}
