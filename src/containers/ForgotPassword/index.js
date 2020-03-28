import React, {useState} from "react";
import Header from "../../common/Header";
import { Button, TextField } from "@material-ui/core";
import history from "../../history";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import Divider from "../../common/Divider";
import { publicAPI } from "../../utils/api";
import {
        errorNotification,
        successNotification
    } from "../../utils/toastrs";

const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    max-width: 400px;
    margin: auto;
`


export default function ForgotPassword() {
    const [email, setEmail] = useState('')

    const handleBackBtn = () => {
        history.push("/login")
    }

    const handleSubmit = async () => {
        try{
            publicAPI.post("/auth/forgot-password", email)
            history.push("/login")
            successNotification("Lozinka uspešno poslata. Proverite Vaš email.")
        } catch(error){
            errorNotification("Vaš email nije validan.")
        }
    }

    return(
        <>
            <Header>
                <Button onClick={handleBackBtn}>Vrati se</Button>
            </Header>
            <Container>
                <h1>
                    Ukoliko ste zaboravili lozinku unesite Vaš email kako bi smo Vam poslali novu i omogućili pristup Vašem nalogu.
                </h1>

                <h2>#OstaniKodKuće</h2>

                <TextField 
                    label="Vaša mail adresa?"
                    type="email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />

                <Divider/>

                <Button
                    style={{
                    backgroundColor: colors.confirmedCase,
                    color: colors.main
                    }}
                    onClick={handleSubmit}
                >
                    Potvrdi
                </Button>
            </Container>
        </>
    )
}