import React from "react";
import styled from "styled-components";
import HelpIcon from "@material-ui/icons/LocalHospital";
import CustomButton from "../../../../common/CustomButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Details({ user }) {
    return (
        <Container>
            <span>{user.email}</span>
            <span>{user.gender}</span>
            <CustomButton
                variant="contained"
                color="secondary"
                startIcon={<HelpIcon />}
                label={"Kosultuj se sa lekarom"}
            />
        </Container>
    )
}
