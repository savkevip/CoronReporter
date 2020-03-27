import React, { useState } from "react";
import Divider from "../../../../common/Divider";
import Sidebar from "../../../../common/Sidebar";
import styled from "styled-components";
import { Button, Select, MenuItem } from "@material-ui/core";
import {
  errorNotification,
  successNotification
} from "../../../../utils/toastrs";
// pa sto ovako? :D pogledaj 5u liniju koda -> nemoj copy -> paste :D
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { privateAPI } from "../../../../utils/api";
import { removeCookie } from "../../../../utils/coockie";
import history from "../../../../history"

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto !important;
`;

// obrisi ovo moze i bez tranzicije samo ce ref da nam se zali iz browsera u browser otvori console i videces :D
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Side({ user, open, setOpen }) {
  const [value, setValue] = useState({ ...user.details });
  const [symptom, setSymptom] = useState({ ...user.symptoms });
  // promeni naming -> openDeleteDialog, setOpenDeleteDialog
  const [message, setMessage] = useState(false);

  const onSubmit = async () => {
    const data = {
      email: user.email,
      acceptedTermsAndConditions: user.acceptedTermsAndConditions,
      details: {
        ...value,
        contact: value.contact,
        areas: value.areas
      },
      symptoms: { ...symptom },
      chronic: { ...user.chronic }
    };

    try {
      await privateAPI.put("/user/update", { ...data });
      successNotification("Uspešno ste ažurirali podatke.");
      setOpen(false);
    } catch (error) {
      errorNotification("Greška.");
    }
  };

  // ovo moze u jednu funkciju (61, 65) -> handleToggle = () => setOpenDeleteDialog(!openDeleteDialog)
  const handleOpen = () => {
    setMessage(true)
  }

  const handleMessageBack = () => {
    setMessage(false)
  }

  const handleDelete =  async () => {
    // instaliraj Prettier mora ti pokazes da ti sam formatira kod da ne udaras po `space`-u sam :D
    try {
    await privateAPI.delete('/user/delete');
    successNotification("Uspešno ste obrisali nalog."); // ovo na kraju
    history.push("/login"); // ovo iznad notifikacije
    removeCookie("token") // prvo brises kolacice :D
    removeCookie("role")
    }catch (error) {
      errorNotification("Greška.");
    }

  }

  return (
    <Sidebar anchor="right" open={open} onClose={() => setOpen(false)}>
      <h2>Azurirajte svoje trenutno stanje</h2>
      <Form>
        <label>Da li imate temperaturu?</label>
        <Select
          onChange={e =>
            setSymptom({ ...symptom, temperature: e.target.value })
          }
          value={symptom.temperature}
        >
          <MenuItem value={true}>Da</MenuItem>
          <MenuItem value={false}>Ne</MenuItem>
        </Select>
        <Divider />
        <label>Da li imate kašalj?</label>
        <Select
          onChange={e => setSymptom({ ...symptom, cough: e.target.value })}
          value={symptom.cough}
        >
          <MenuItem value={true}>Da</MenuItem>
          <MenuItem value={false}>Ne</MenuItem>
        </Select>
        <Divider />
        <label>Da li imate bol u grudima?</label>
        <Select
          onChange={e => setSymptom({ ...symptom, chestPain: e.target.value })}
          value={symptom.chestPain}
        >
          <MenuItem value={true}>Da</MenuItem>
          <MenuItem value={false}>Ne</MenuItem>
        </Select>
        <Divider />
        <label>Da li imate bol u grlu?</label>
        <Select
          onChange={e => setSymptom({ ...symptom, soreThroat: e.target.value })}
          value={symptom.soreThroat}
        >
          <MenuItem value={true}>Da</MenuItem>
          <MenuItem value={false}>Ne</MenuItem>
        </Select>
        <Divider />
        <label>Da li osećate slabost/malaksalost?</label>
        <Select
          onChange={e => setSymptom({ ...symptom, fever: e.target.value })}
          value={symptom.fever}
        >
          <MenuItem value={true}>Da</MenuItem>
          <MenuItem value={false}>Ne</MenuItem>
        </Select>
        <Divider />
        <label>Da li otežano dišete?</label>
        <Select
          onChange={e =>
            setSymptom({ ...symptom, heavyBreathing: e.target.value })
          }
          value={symptom.heavyBreathing}
        >
          <MenuItem value={true}>Da</MenuItem>
          <MenuItem value={false}>Ne</MenuItem>
        </Select>
        <Divider />
        <label>Da li imate glavobolju?</label>
        <Select
          onChange={e => setSymptom({ ...symptom, headache: e.target.value })}
          value={symptom.headache}
        >
          <MenuItem value={true}>Da</MenuItem>
          <MenuItem value={false}>Ne</MenuItem>
        </Select>
        <Divider />
        <label htmlFor="areas-native-simple" color="white">
          Da li ste boravili u rizičnim područjima?
        </label>
        <Select
          onChange={e => setValue({ ...value, areas: e.target.value })}
          value={value.areas}
        >
          <MenuItem value={true}>Da</MenuItem>
          <MenuItem value={false}>Ne</MenuItem>
        </Select>
        <Divider />
        <label htmlFor="contact-native-simple" color="white">
          Da li ste imali kontakt sa zaraženim osobama?
        </label>
        <Select
          onChange={e => setValue({ ...value, contact: e.target.value })}
          value={value.contact}
        >
          <MenuItem value={true}>Da</MenuItem>
          <MenuItem value={false}>Ne</MenuItem>
        </Select>
        <Divider />
      </Form>
      <Button
        type="submit"
        onClick={onSubmit}
        variant="contained"
        color="default"
        size="small"
      >
        Dodaj
      </Button>
      <Divider />
      <Button
        onClick={handleOpen}
        variant="contained"
        color="secondary"
        size="small"
      >
        Obriši profil
      </Button>
      {/*nema potrebe za ovo message to treba da bude rename-ovano ko sto sam ti napisao gore i da ide u open property dole*/}
      {/*ubicu te sa ovi kopiranjem koda :D :D*/}
      {/*sad ispada da Dialog koristi `open` vrednost od sidebara*/}
      {/*vidi sta znaci u dokumentaciji keep mointed property i da li nam treba to uopste isto ovi id-jevi*/}
      {message ?
            <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleMessageBack}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">{"Obriši nalog?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Ukoliko obrišete nalog, svi vaši podaci će zauvek biti uklonjeni.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleMessageBack} color="primary" id="back">
                  Vrati se
                </Button>
                <Button onClick={handleDelete} color="secondary" id="delete">
                  Obriši
                </Button>
              </DialogActions>
            </Dialog>
              :
              null
              }
    </Sidebar>
  );
}
