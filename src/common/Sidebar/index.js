import React from "react";
import styled from "styled-components";
import { Drawer } from "@material-ui/core";
import { colors } from "../../utils/colors";

export const Container = styled(Drawer)`
  & > .MuiDrawer-paper {
    padding: 25px;
  }
`;

export default function Sidebar(props) {
  return <Container {...props} />;
}
