import React from "react";
import styled from "styled-components";
import HelpIcon from "@material-ui/icons/LocalHospital";
import CustomButton from "../../../../common/CustomButton";
import Divider from "../../../../common/Divider";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// ovo izbrisi imamo styled components ocu u tome da uradis ovo isto :D
// namuci se malo da naucis opet copy paste :D
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Details({ user }) {
    // i ovo izbrisi :D
  const classes = useStyles();

  return (
    <Container>
        <Card className={classes.root}>
            <CardContent>
              {/* unutar ove CardContent komponente -> ceo refactor :D */}
              <AssignmentIndIcon fontSize="large" color="primary"/>
              <Typography variant="body2" component="p">
                Email: {user.email}
                <br />
                {user.gender === "male" ? <Typography  variant="body2" component="p">Pol: Muški</Typography > : <Typography  variant="body2" component="p">Pol: Ženski</Typography>}
                Godine: {user.age}
                <br />
                Visina: {user.height}cm
                <br />
                Poštanski kod: {user.zipCode}
              </Typography>
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
