import React, { useState } from "react";
import Map from "./components/Map";
import Header from "../../common/Header";
import Details from "./components/Details";
import AddIcon from "@material-ui/icons/Add";
import history from "../../history";
import { Container, LocationWrapper, ButtonApply, Sidebar } from "./styles";

const isAuth = true;

export default function Home() {
    const [open, setOpen] = useState(false);

    const goToRegister = () => history.push('/registration');

  return (
    <>
        <Header>
            <ButtonApply
                variant="contained"
                color="secondary"
                startIcon={<AddIcon />}
                onClick={goToRegister}
            >
                SIMPTOME
            </ButtonApply>
            {isAuth && <Details onToggle={() => setOpen(!open)} />}
        </Header>
        <Container>
            <LocationWrapper>
                <Map />
            </LocationWrapper>
            <Sidebar anchor="right" open={open} onClose={() => setOpen(false)}>
                <h1>Ovde ce da ide lista simptoma koje moze da updejtuje</h1>
            </Sidebar>
        </Container>
    </>
  );
}
