import React, { useState } from "react";
import Header from "../../common/Header";
import Divider from "../../common/Divider";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import history from "../../history";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { errorNotification, successNotification } from "../../utils/toastrs";

const Container = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 400px;
  margin: auto;
`;

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    if (!email) {
      errorNotification("Email je obavezno polje.");
      return;
    }
    if (!password) {
      errorNotification("Lozinka je obavezno polje.");
      return;
    }
    history.push("/");
  };

  return (
    <>
      <Header />
      <Container>
        <h1>
          Budi odgovoran! Pomozi sebi i drugima. Vodi evidenciju o svom
          trenutnom zdravstvenom stanju. Hvala! &hearts;
        </h1>
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
          style={{ backgroundColor: colors.confirmedCase, color: colors.main }}
          variant="contained"
          startIcon={<PersonIcon />}
          onClick={handleLogin}
        >
          Prijavi se
        </Button>

        <Divider />

        <Link to="/forgot">Zaboravili ste lozinku?</Link>

        <Divider />

        <Link to="/registration">Još uvek nemate nalog?</Link>
      </Container>
    </>
  );
}
