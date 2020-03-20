import React from "react";
import {Container, LogoWrapper, Logo} from "./styles";

const logoUrl = require("../../assets/logo.svg");

export default function Header({ children }) {
    return (
        <Container>
            <LogoWrapper>
                <Logo src={logoUrl} />
            </LogoWrapper>
            {children}
        </Container>
    )
}
