import { Button, Drawer } from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  padding: 25px;
`;

export const ButtonApply = styled(Button)`
  background-color: ${colors.marker} !important;
  margin: 0 20px !important;
`;

export const LocationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Sidebar = styled(Drawer)`
  & > .MuiDrawer-paper {
  padding: 25px;
    background-color: #CD5C5C;
    color: ${colors.main};
  }
`;
