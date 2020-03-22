import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Header from "../../common/Header";
import Divider from "../../common/Divider";
import history from "../../history";
import styled from "styled-components";
import {
  Button,
  Select,
  InputLabel,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const countries = [
  { code: "BA", label: "Bosnia and Herzegovina", phone: "387" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "ME", label: "Montenegro", phone: "382" },
  { code: "MK", label: "North Macedonia", phone: "389" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "SI", label: "Slovenia", phone: "386" }
];

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18
    }
  }
});

const Container = styled.div`
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export default function Registration() {
  const [value, setValue] = useState({});
  const [checked, setChecked] = useState({});
  const [country, setCountry] = useState();

  const classes = useStyles();

  const onSubmit = () => {
    console.log(value);
    console.log(checked);
    console.log(country);
  };

  const handleChangeCheckBox = (event, type) => {
    setChecked({ ...checked, [type]: event.target.checked });
  };

  const goBack = () => history.push("/login");

  return (
    <Container>
      <Header>
        <Button onClick={goBack}>Vrati se</Button>
      </Header>

      <Form>
        <h1>Formular o simptomima</h1>

        <InputLabel htmlFor="gender">Pol</InputLabel>
        <Select
          id="gender"
          onChange={e => setValue({ ...value, gender: e.target.value })}
          value={value.gender}
        >
          <MenuItem value="male">Muški</MenuItem>
          <MenuItem value="female">Ženski</MenuItem>
        </Select>

        {value.gender === "female" && (
          <>
            <Divider />
            <InputLabel htmlFor="pregnancy">
              Da li ste u drugom stanju?
            </InputLabel>
            <Select
              id="pregnancy"
              onChange={e => setValue({ ...value, pregnancy: e.target.value })}
              value={value.pregnancy}
            >
              <MenuItem value={true}>Da</MenuItem>
              <MenuItem value={false}>Ne</MenuItem>
            </Select>

            {value.pregnancy && (
              <>
                <Divider />
                <TextField
                  id="standard-number"
                  label="Mesec trudnoće"
                  type="number"
                  value={value.month}
                  onChange={e => setValue({ ...value, month: e.target.value })}
                />
              </>
            )}
          </>
        )}

        <Divider />

        <TextField
          id="ages"
          value={value.age}
          label="Koliko imate godina?"
          type="number"
          onChange={e => setValue({ ...value, age: e.target.value })}
        />

        <Divider />

        <InputLabel htmlFor="areas">
          Da li ste boravili u rizičnim područjima?
        </InputLabel>
        <Select
          id="areas"
          onChange={e => setValue({ ...value, areas: e.target.value })}
          value={value.areas}
        >
          <MenuItem value={true}>Da</MenuItem>
          <MenuItem value={false}>Ne</MenuItem>
        </Select>

        <Divider />

        <InputLabel htmlFor="contact">
          Da li ste imali kontakt sa zaraženim osobama?
        </InputLabel>
        <Select
          id="contact"
          onChange={e => setValue({ ...value, contact: e.target.value })}
          value={value.contact}
        >
          <MenuItem value={true}>Da</MenuItem>
          <MenuItem value={false}>Ne</MenuItem>
        </Select>

        <Divider />

        <InputLabel> Da li imate neki od navedenih simptoma? </InputLabel>
        <Divider />
        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "temperature")}
              name="checked1"
              color="primary"
            />
          }
          label="Temperatura"
        />

        <Divider />

        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "caught")}
              name="checked2"
              color="primary"
            />
          }
          label="Kašalj"
        />

        <Divider />

        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "chest pain")}
              name="checked3"
              color="primary"
            />
          }
          label="Bol u grudima"
        />

        <Divider />

        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "sore throat")}
              name="checked4"
              color="primary"
            />
          }
          label="Bol u grlu"
        />

        <Divider />

        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "exhaustion")}
              name="checked5"
              color="primary"
            />
          }
          label="Malaksalost"
        />

        <Divider />

        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "hevy breathing")}
              name="checked6"
              color="primary"
            />
          }
          label="Otežano disanje"
        />

        <Divider />

        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "headache")}
              name="checked7"
              color="primary"
            />
          }
          label="Glavobolja"
        />

        <Divider />

        <InputLabel htmlFor="smoker">Da li ste pušač?</InputLabel>
        <Select
          id="smoker"
          onChange={e => setValue({ ...value, smoke: e.target.value })}
          value={value.smoke}
        >
          <MenuItem value={true}>Da</MenuItem>
          <MenuItem value={false}>Ne</MenuItem>
        </Select>

        <Divider />

        <InputLabel>Da li se lečite od neke hronične bolesti?</InputLabel>
        <Divider />
        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "diabetes type 1")}
              name="checked1"
              color="primary"
            />
          }
          label="Diabetes tip 1"
        />

        <Divider />

        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "diabetes type 2")}
              name="checked2"
              color="primary"
            />
          }
          label="Diabetes tip 2"
        />

        <Divider />

        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "asthma")}
              name="checked3"
              color="primary"
            />
          }
          label="Astma"
        />

        <Divider />

        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "copd")}
              name="checked4"
              color="primary"
            />
          }
          label="COPD"
        />

        <Divider />

        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "high blood preasure")}
              name="checked5"
              color="primary"
            />
          }
          label="Visok krvni pritisak"
        />

        <Divider />

        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "tumor")}
              name="checked6"
              color="primary"
            />
          }
          label="Tumorske bolesti"
        />

        <Divider />

        <FormControlLabel
          control={
            <Checkbox
              onChange={e => handleChangeCheckBox(e, "other")}
              name="checked7"
              color="primary"
            />
          }
          label="Druge bolesti"
        />

        {checked.other && (
          <div>
            <Divider />
            <TextField
              id="other"
              label="Navedite bolesti"
              value={value.disease}
              onChange={e =>
                setValue({ ...value, ["disease"]: e.target.value })
              }
            />
          </div>
        )}

        <Divider />

        <InputLabel htmlFor="surgery">
          Da li ste imali neke operacije tokom života?
        </InputLabel>
        <Select
          id="surgery"
          onChange={e => setValue({ ...value, surgery: e.target.value })}
          value={value.surgery}
        >
          <MenuItem value={true}>Da</MenuItem>
          <MenuItem value={false}>Ne</MenuItem>
        </Select>

        <Divider />

        <Autocomplete
          onChange={(event, value) => setCountry(value)}
          id="country-select"
          options={countries}
          classes={{
            option: classes.option
          }}
          autoHighlight
          getOptionLabel={option => option.label}
          renderOption={option => (
            <>
              <span>{countryToFlag(option.code)}</span>
              {option.label} {option.flag} ({option.code}) +{option.phone}
            </>
          )}
          renderInput={params => (
            <TextField
              {...params}
              label="Iz koje ste države?"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password"
              }}
            />
          )}
        />

        <Divider />

        <TextField
          id="email"
          label="Vaša mail adresa?"
          type="email"
          onChange={e => setValue({ ...value, email: e.target.value })}
          value={value.email}
        />

        <Divider />

        <TextField
          id="password"
          label="Vaša lozinka?"
          type="password"
          onChange={e => setValue({ ...value, password: e.target.value })}
          value={value.password}
        />

        <Divider />

          <Button
              type="submit"
              onClick={onSubmit}
              variant="contained"
              color="secondary"
              size="large"
          >
              Potvrdi
          </Button>
      </Form>
    </Container>
  );
}
