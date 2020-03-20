import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { useForm } from 'react-hook-form'
import { Divider, Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Container = styled.div`
  padding: 25px;
`;

export default function Registration() {
  //check box ne radi ok, preventDefault ne radi, moze da se odradi dobar dry :)

  const {register, handleSubmit } = useForm();

  const [checked, setChecked] = useState('');
  const [godine, setGodine] = useState('');
  const [pol, setPol] = useState('');
  const [drugoStanje, setDrugoStanje] = useState('');
  const [podrucja, setPodrucja] = useState('')
  const [kontakt, setKontakt] = useState('')
  const [pusac, setPusac] = useState('')
  const [bolesti, setBolesti] = useState('')
  const [vrsteBolesti, setVrsteBolesti] = useState('')
  const [operacije, setOperacije] = useState('')
  const [mesec, setMesec] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    console.log('godine: ', godine)
    console.log('pol: ', pol)
    console.log('drugo stanje', drugoStanje)
    console.log('podrucja', podrucja)
    console.log('kontakt', kontakt)
    console.log('pusac', pusac)
    console.log('bolesti', bolesti)
    console.log('email', email)
    console.log('pass', password)
  }

  const handleChangeCheckBox = event => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
      <Link to={"/"}>go to Home.</Link>
      <Divider light />
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration</h1>

        <InputLabel htmlFor="age-native-simple">1. Pol</InputLabel>
        <Select native ref={register} onChange={(e) => setPol(e.target.value)} value={pol}>
          <option aria-label="None" value="" />
          <option value='muski'>Muški</option>
          <option value='zenski'>Ženski</option>
        </Select>

        <br></br>

        <TextField id="standard-number" value={godine} label="2. Godine" type="number" ref={register} onChange={(e) => setGodine(e.target.value)}/>

        <br></br>
        
        <InputLabel htmlFor="age-native-simple">3. Da li ste u drugom stanju?</InputLabel>
        <Select native ref={register} onChange={(e) => setDrugoStanje(e.target.value)} value={drugoStanje}>
          <option aria-label="None" value="" />
          <option value='da'>Da</option>
          <option value='ne'>Ne</option>
        </Select>

        {drugoStanje === 'da' ?
            <div>
              <TextField id="standard-number" label="Mesec trudnoce" type="number" value={mesec} ref={register} onChange={(e) => setMesec(e.target.value)}/>
            </div>
          :
          null
        }

        <InputLabel htmlFor="age-native-simple">4. Da li ste boravili u rizicnim podrucjima?</InputLabel>
        <Select native ref={register} onChange={(e) => setPodrucja(e.target.value)} value={podrucja}>
          <option aria-label="None" value="" />
          <option value='da'>Da</option>
          <option value='ne'>Ne</option>
        </Select>

        <InputLabel htmlFor="age-native-simple">5. Da li ste imali kontakt sa zarazenim osobama?</InputLabel>
        <Select native ref={register} onChange={(e) => setKontakt(e.target.value)} value={kontakt}>
          <option aria-label="None" value="" />
          <option value='da'>Da</option>
          <option value='ne'>Ne</option>
        </Select>

        <InputLabel htmlFor="age-native-simple">6. Da li ste pusac?</InputLabel>
        <Select native ref={register} onChange={(e) => setPusac(e.target.value)} value={pusac}>
          <option aria-label="None" value="" />
          <option value='da'>Da</option>
          <option value='ne'>Ne</option>
        </Select>

        <br></br>

        <label>8. Da li imate neki od navedenih simptoma?</label>
        <br></br>
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChangeCheckBox}
              name="checked1"
              color="primary"
              ref={register}
            />
          }
          label="Temperatura"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChangeCheckBox}
              name="checked2"
              color="primary"
              ref={register}
            />
          }
          label="Kasalj"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChangeCheckBox}
              name="checked3"
              color="primary"
              ref={register}
            />
          }
          label="Bol u grudima"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChangeCheckBox}
              name="checked4"
              color="primary"
              ref={register}
            />
          }
          label="Bol u grlu"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChangeCheckBox}
              name="checked5"
              color="primary"
              ref={register}
            />
          }
          label="Malaksalost"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChangeCheckBox}
              name="checked6"
              color="primary"
              ref={register}
            />
          }
          label="Otezano disanje"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChangeCheckBox}
              name="checked7"
              color="primary"
              ref={register}
            />
          }
          label="Glavobolja"
        />
        <br></br>

        <InputLabel htmlFor="age-native-simple">9. Da li se lecite od neke hronicne bolesti?</InputLabel>
        <Select native ref={register} onChange={(e) => setBolesti(e.target.value)} value={bolesti}>
          <option aria-label="None" value="" />
          <option value='da'>Da</option>
          <option value='ne'>Ne</option>
        </Select>
        {bolesti === 'da' ?
            <div>
              <TextField id="standard-basic-op" label="Navedite bolesti" value={vrsteBolesti} ref={register} onChange={(e) => setVrsteBolesti(e.target.value)}/>
            </div>
          :
          null
        }

        <InputLabel htmlFor="age-native-simple">10. Da li ste imali neke operacije tokom zivota?</InputLabel>
        <Select native ref={register} onChange={(e) => setOperacije(e.target.value)} value={operacije}>
          <option aria-label="None" value="" />
          <option value='da'>Da</option>
          <option value='ne'>Ne</option>
        </Select>

        <br></br>
        <TextField id="standard-basic-email" label="Email" type='email' ref={register} onChange={(e) => setEmail(e.target.value)} value={email}/>
        <br></br>

        <TextField id="standard-basic-password" label="Lozinka" type='password' ref={register} onChange={(e) => setPassword(e.target.value)} value={password}/>

        <br></br>
        <Button type='submit'>Potvrdi</Button>
      </form>
    </Container>
  );
}
