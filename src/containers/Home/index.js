import React, { useState, useEffect } from "react";
import Details from "./components/Details";
import Header from "../../common/Header";
import CustomButton from "../../common/CustomButton";
import Loader from "../../common/Loader";
import Map from "../../common/Map";
import AddIcon from "@material-ui/icons/Add";
import LogOutIcon from "@material-ui/icons/Person";
import history from "../../history";
import { Container, Wrapper, LoaderWrapper } from "./styles";
import SidebarUpdate from "./components/SidebarUpdate";
import { privateAPI } from "../../utils/api";
import { systemError } from "../../utils/toastrs";
import {removeCookie} from "../../utils/coockie"

export default function Home() {
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    details: {}
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function() {
      try {
        const response = await privateAPI.get("/user/details");
        setCurrentUser(response.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        systemError();
      }
    })();
  }, []);

  const logOut = () => {
    // i ovde prvo brises kolacice pa onda na login
    history.push("/login");
    removeCookie("token");
    removeCookie("role")
  };

  return (
    <>
      {loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
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
              <Details user={currentUser.details} />
            </Wrapper>
            <SidebarUpdate user={currentUser} open={open} setOpen={setOpen} />
          </Container>
        </>
      )}
    </>
  );
}
