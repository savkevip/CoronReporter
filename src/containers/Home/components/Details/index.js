import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div``;

const ProfileButton = styled(Button)`
  margin: 0 20px !important
`

export default function Details({ onToggle }) {
    return (
        <Container>
            <ProfileButton onClick={onToggle}>
                savkevip@gmail.com
            </ProfileButton>
        </Container>
    )
}
