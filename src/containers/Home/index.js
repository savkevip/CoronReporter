import React, { useState } from "react";
import Details from "./components/Details";
import Header from "../../common/Header";
import CustomButton from "../../common/CustomButton";
import Map from "../../common/Map";
import AddIcon from "@material-ui/icons/Add";
import LogOutIcon from "@material-ui/icons/Person";
import history from "../../history";
import { Container, Wrapper } from "./styles";
import SidebarUpdate from "./components/SidebarUpdate"

const user = {
  email: "zarazeni@gmail.com",
  gender: "male"
};

export default function Home() {
  const [open, setOpen] = useState(false);

  const logOut = () =>
      history.push("/login");

  return (
    <>
      <Header>
        <CustomButton
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
          label={"SIMPTOME"}
        />
        <CustomButton
            variant="contained"
            color="secondary"
            startIcon={<LogOutIcon />}
            onClick={logOut}
            label={"Odjavi se"}
        />
      </Header>
      <Container>
        <Wrapper>
          <Map />
        </Wrapper>
        <Wrapper>
          <Details user={user} />
        </Wrapper>
        <SidebarUpdate open={open} setOpen={setOpen} />
      </Container>
    </>
  );
}
