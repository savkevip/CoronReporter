import { Button } from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

export const ButtonApply = styled(Button)`
  background-color: ${colors.marker} !important;
`;
