import React, { useState } from "react";
import Divider from "../../../../common/Divider";
import Sidebar from "../../../../common/Sidebar";
import styled from "styled-components";
import { Button, Select, MenuItem } from "@material-ui/core";
import {
  errorNotification,
  successNotification
} from "../../../../utils/toastrs";
import { privateAPI } from "../../../../utils/api";
import { setCookie } from "../../../../utils/coockie";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto !important;
`;

export default function Side({ user, open, setOpen }) {
  const [value, setValue] = useState({ ...user.details });
  const [symptom, setSymptom] = useState({ ...user.symptoms });

  const onSubmit = async () => {
    const data = {
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
    } catch (error) {
      errorNotification("Greška.");
    }
  };

  return (
    <Sidebar anchor="right" open={open} onClose={() => setOpen(false)}>
      <h2>Azurirajte svoje trenutno stanje</h2>
      <Form>
        <label> Da li imate temperaturu?</label>
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
        type="submit"
        onClick={() => console.log("Hi, doctor!")}
        variant="contained"
        color="secondary"
        size="small"
      >
        Obriši profil
      </Button>
    </Sidebar>
  );
}
