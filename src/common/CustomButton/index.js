import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../../utils/colors";

const Component = styled(Button)`
  background-color: ${colors.confirmedCase} !important;
  margin-left: 5px !important;
`;

export default function CustomButton({ label, ...other }) {
  return <Component {...other}>{label}</Component>;
}
