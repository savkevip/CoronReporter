import React, { useState } from "react";
import Details from "./components/Details";
import Header from "../../common/Header";
import Divider from "../../common/Divider";
import Sidebar from "../../common/Sidebar";
import CustomButton from "../../common/CustomButton";
import Map from "../../common/Map";
import AddIcon from "@material-ui/icons/Add";
import {
  Container,
  Wrapper,
} from "./styles";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import {
  Button,
  Select,
  Checkbox,
  FormControlLabel,
  MenuItem
} from "@material-ui/core";

const user = {
  email: "zarazeni@gmail.com",
  gender: "male"
};

const WhiteCheckbox = withStyles({
  root: {
    color: grey[50],
    "&$checked": {
      color: grey[200]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto !important;
`;

export default function Home() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState({});
  const [value, setValue] = useState({});

  const handleChangeCheckBox = (event, type) =>
    setChecked({ ...checked, [type]: event.target.checked });

  const onSubmit = () => {
    console.log(value);
    console.log(checked);
  };

  return (
    <>
      <Header>
        <CustomButton
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
          label={"SIMPTOME"}
        />
      </Header>
      <Container>
        <Wrapper>
          <Map />
        </Wrapper>
        <Wrapper>
          <Details user={user} />
        </Wrapper>
      </Container>
      {/*ovo sve treba da ideu posebnu komponentu => SidebarUpdate :)*/}
      <Sidebar anchor="right" open={open} onClose={() => setOpen(false)}>
        <h1>Azurirajte svoje zdravstveno stanje</h1>
        <Form>
          <label> Da li imate neki od navedenih simptoma? </label>
          <FormControlLabel
            control={
              <WhiteCheckbox
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
              <WhiteCheckbox
                onChange={e => handleChangeCheckBox(e, "cought")}
                name="checked2"
                color="primary"
              />
            }
            label="Kasalj"
          />
          <Divider />
          <FormControlLabel
            control={
              <WhiteCheckbox
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
              <WhiteCheckbox
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
              <WhiteCheckbox
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
              <WhiteCheckbox
                onChange={e => handleChangeCheckBox(e, "hevy breathing")}
                name="checked6"
                color="primary"
              />
            }
            label="Otezano disanje"
          />
          <Divider />
          <label htmlFor="areas-native-simple" color="white">
            Da li ste boravili u rizicnim podrucjima?
          </label>
          <Select
            onChange={e => setValue({ ...value, areas: e.target.value })}
            value={value.areas}
          >
            <MenuItem value="true">Da</MenuItem>
            <MenuItem value="false">Ne</MenuItem>
          </Select>
          <Divider />
          <label htmlFor="contact-native-simple" color="white">
            Da li ste imali kontakt sa zarazenim osobama?
          </label>
          <Select
            onChange={e => setValue({ ...value, contact: e.target.value })}
            value={value.contact}
          >
            <MenuItem value="true">Da</MenuItem>
            <MenuItem value="false">Ne</MenuItem>
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
          color="default"
          size="small"
        >
          Konsultujte doktora
        </Button>
      </Sidebar>
    </>
  );
}
