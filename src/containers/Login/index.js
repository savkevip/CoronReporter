import React, { useState } from "react";
import Header from "../../common/Header";
import Divider from "../../common/Divider";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import history from "../../history";
import styled from "styled-components";
import { colors } from "../../utils/colors";

const Container = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 400px;
  margin: auto;
  padding: 25px;
`;

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const goToHomePage = () => history.push("/")

  return (
    <>
      <Header />
      <Container>
          <h1>Budi odgovoran i pomozi sebi i drugima vodi svoju sopstvenu evidenciju o svom trenutnom stanju. Hvala! &hearts;</h1>
        <h2>#OstaniKodKuće</h2>
        <TextField
          id="email"
          label="Vaša mail adresa?"
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />

        <Divider />

        <TextField
          id="password"
          label="Vaša lozinka?"
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />

        <Divider />

        <Button
            style={{ backgroundColor: colors.marker, color: colors.main }}
            variant="contained"
            startIcon={<PersonIcon />}
            onClick={goToHomePage}
        >
            Prijavi se
        </Button>

          <Divider />

          <Link to="/registration">Još uvek nemate nalog?</Link>
      </Container>
    </>
  );
}
