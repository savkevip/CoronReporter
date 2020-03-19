import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
  padding: 25px;
`;

export default function Registration() {
  return (
    <Container>
      <h1>Registration</h1>
      <Link to={"/"}>go to Home.</Link>
    </Container>
  );
}
