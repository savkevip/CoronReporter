import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { useForm } from 'react-hook-form'
import {
  Divider,
  Button,
  Select,
  InputLabel,
  TextField,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';

const Container = styled.div`
  padding: 25px;
`;

export default function Registration() {
  // sve pisi na engleskom nazive finkcija i vrednosti samo labele koje se vide na UI na srpskom :)

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

  // const [value, setValue] = useState({});
  // svuda gde ti je value e.target.value mozes samo jedan hook da koristis
  // value bude prazan objekat
  // i onda dole pozoves
  // <Component onChange={e => setValue({ ...value, 'pol': e.target.value })
  // ovo ...value ti je spread znas vrv u ES6 i tu je da ne bi funckcija izbrisala ostale vrednosti :)

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
    // gde god da pozivas ovu funciju mozes npr isto da ti bude objekat pa da imas nesto kao
    // { gender: "male", age: "68", -> pa onda za ovu listu checkboxova -> diseases: { temperature: true, cough: false .... } }
    console.log(event.target.checked);
    setChecked(event.target.checked);
  };

  return (
    <Container>
      <Link to={"/"}>go to Home.</Link>
      <Divider light />
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration</h1>
        {/* ovo se kaci za id inputa => htmlFor="age-native-simple" nemoj svuda da bude isti */}
        {/* izbaci brojeve iz pitanja ovo 1. 2. 3. nema potrebe :) */}
        <InputLabel htmlFor="age-native-simple">1. Pol</InputLabel>
        <Select native ref={register} onChange={(e) => setPol(e.target.value)} value={pol}>
          <option aria-label="None" value="" />
          <option value='muski'>Muški</option>
          <option value='zenski'>Ženski</option>
        </Select>

        {/* ovo ces sa flexbox-om da sredis u styled-components/css-u a ne sa <br> */}
        <br></br>

        <TextField id="standard-number" value={godine} label="2. Godine" type="number" ref={register} onChange={(e) => setGodine(e.target.value)}/>

        <br></br>

        <InputLabel htmlFor="age-native-simple">3. Da li ste u drugom stanju?</InputLabel>
        <Select native ref={register} onChange={(e) => setDrugoStanje(e.target.value)} value={drugoStanje}>
          {/* koristi MenuItem iz material ui-a */}
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
              {/* ovako formatiraj componente kada imas vise props-ova zbog vidljivosti */}
              <TextField
                  id="standard-basic-op"
                  label="Navedite bolesti"
                  value={vrsteBolesti}
                  ref={register}
                  onChange={(e) => setVrsteBolesti(e.target.value)}
              />
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
        {/* button neki malo mocniji ajmoo :D :D */}
        <Button type='submit'>Potvrdi</Button>
      </form>
    </Container>
  );
}
