import React from "react";
import styled from "styled-components";
import HelpIcon from "@material-ui/icons/LocalHospital";
import CustomButton from "../../../../common/CustomButton";
import Divider from "../../../../common/Divider";
import {
  Card, 
  CardContent,
} from '@material-ui/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const DetailItem = styled.span`
margin: 5px 0px;
`

export default function Details({ user, email }) {

  return (
    <Container>
        <Card>
            <CardContent>
              <DetailWrapper>
                <DetailItem>Email: {email}</DetailItem>
                <DetailItem>Poštanski broj: {user.zipCode}</DetailItem>
                <DetailItem>Pol: {user.gender === 'male' ? 'Muški' : 'Ženski'}</DetailItem>
                <DetailItem>Visina: {user.height} cm</DetailItem>
                <DetailItem>Težina: {user.weight} kg</DetailItem>
              </DetailWrapper>
            </CardContent>
        </Card>
      <Divider />
      <CustomButton
        variant="contained"
        color="secondary"
        startIcon={<HelpIcon />}
        label={"Konsultuj se sa lekarom"}
      />
    </Container>
  );
}
