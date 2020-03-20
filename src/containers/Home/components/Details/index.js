import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 35%;
`;

export default function Details({ content }) {
    return (
        <Container>
            <h1>{content}</h1>
        </Container>
    )
}
