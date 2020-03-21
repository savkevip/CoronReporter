import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import {
  Divider,
  Button,
  Select,
  InputLabel,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem
} from '@material-ui/core';


const Container = styled.div`
  padding: 25px;
  width: 800px;
  margin: 0 auto !important;
  `;

// mozes formi da stavis width neki -> na velikom ekranu je ogromno :)
const Form = styled.div`
display: flex;
flex-direction: column;
width: 800px;
margin: 0 auto !important;
`

export default function Registration() {

  const [value, setValue] = useState({});
  const [checked, setChecked] = useState({});

  const onSubmit = () => {
    console.log(value)
    console.log(checked)
  }

  const handleChangeCheckBox = (event, type) => {
    console.log({[type]: event.target.checked});
    setChecked({...checked, [type]: event.target.checked});
  };

  return (
    <Container>
      <Link to={"/"}>go to Home.</Link>
      <Divider light />
      <Form>
        <h1>Registration</h1>
          <InputLabel htmlFor="gender-native-simple">Pol</InputLabel>
          <Select onChange={(e) => setValue({...value, 'gender': e.target.value})} value={value.gender}>
            <MenuItem value='male'>Muski</MenuItem>
            <MenuItem value='female'>Zenski</MenuItem>
          </Select>

          {value.gender === 'female' ?
            <div>
                <InputLabel htmlFor="pregnency-native-simple">Da li ste u drugom stanju?</InputLabel>
                <Select onChange={(e) => setValue({...value, 'pregnancy': e.target.value})} value={value.pregnancy}>
                  <MenuItem value='true'>Da</MenuItem>
                  <MenuItem value='false'>Ne</MenuItem>
                </Select>
                {value.pregnancy === 'true' ?
                    <div>
                      <TextField
                        id="standard-number"
                        label="Mesec trudnoce"
                        type="number"
                        value={value.month}
                        onChange={(e) => setValue({...value, 'month': e.target.value})}
                      />
                    </div>
                  :
                  null
                }
            </div>
                :
                null
          }

        <TextField
          id="standard-number"
          value={value.age}
          label="Godine"
          type="number"
          onChange={(e) => setValue({...value, 'age': e.target.value})}
        />

        <InputLabel htmlFor="areas-native-simple">Da li ste boravili u rizicnim podrucjima?</InputLabel>
        <Select onChange={(e) => setValue({...value, 'areas': e.target.value})} value={value.areas}>
          <MenuItem value='true'>Da</MenuItem>
          <MenuItem value='false'>Ne</MenuItem>
        </Select>

        <InputLabel htmlFor="contact-native-simple">Da li ste imali kontakt sa zarazenim osobama?</InputLabel>
        <Select  onChange={(e) => setValue({...value, 'contact': e.target.value})} value={value.contact}>
          <MenuItem value='true'>Da</MenuItem>
          <MenuItem value='false'>Ne</MenuItem>
        </Select>

        <InputLabel htmlFor="smoke-native-simple">Da li ste pusac?</InputLabel>
        <Select onChange={(e) => setValue({...value, 'smoke': e.target.value})} value={value.smoke}>
          <MenuItem value='true'>Da</MenuItem>
          <MenuItem value='false'>Ne</MenuItem>
        </Select>

        <label>Da li imate neki od navedenih simptoma?</label>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => handleChangeCheckBox(e, 'temperature')}
              name="checked1"
              color="primary"
            />
          }
          label="Temperatura"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => handleChangeCheckBox(e, 'cought')}
              name="checked2"
              color="primary"
            />
          }
          label="Kasalj"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => handleChangeCheckBox(e, 'chest pain')}
              name="checked3"
              color="primary"
            />
          }
          label="Bol u grudima"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => handleChangeCheckBox(e, 'sore throat')}
              name="checked4"
              color="primary"
            />
          }
          label="Bol u grlu"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => handleChangeCheckBox(e, 'exhaustion')}
              name="checked5"
              color="primary"
            />
          }
          label="Malaksalost"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => handleChangeCheckBox(e, 'hevy breathing')}
              name="checked6"
              color="primary"
            />
          }
          label="Otezano disanje"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => handleChangeCheckBox(e, 'headache')}
              name="checked7"
              color="primary"
            />
          }
          label="Glavobolja"
        />

        <InputLabel htmlFor="diseise-native-simple">Da li se lecite od neke hronicne bolesti?</InputLabel>
        <Select onChange={(e) => setValue({...value, 'diseise': e.target.value})} value={value.diseise}>
          <MenuItem value='true'>Da</MenuItem>
          <MenuItem value='false'>Ne</MenuItem>
        </Select>
        {value.diseise === 'true' ?
            <div>
              <TextField
                  id="standard-basic-op"
                  label="Navedite bolesti"
                  value={value.diseiseKind}
                  onChange={(e) => setValue({...value, 'diseise kind': e.target.value})}
              />
            </div>
          :
          null
        }

        <InputLabel htmlFor="surgery-native-simple">Da li ste imali neke operacije tokom zivota?</InputLabel>
        <Select onChange={(e) => setValue({...value, 'surgery': e.target.value})} value={value.surgery}>
          <MenuItem value='true'>Da</MenuItem>
          <MenuItem value='false'>Ne</MenuItem>
        </Select>

        <TextField
          id="standard-basic-email"
          label="Email" type='email'
          onChange={(e) => setValue({...value, 'email': e.target.value})}
          value={value.email}
        />

        <TextField
          id="standard-basic-password"
          label="Lozinka"
          type='password'
          onChange={(e) => setValue({...value, 'password': e.target.value})}
          value={value.password}
        />

      </Form>
      <Divider />
      <Button type='submit'
              onClick={onSubmit}
              variant="contained"
              color="secondary"
              size="large"> Potvrdi </Button>
    </Container>
  );
}
