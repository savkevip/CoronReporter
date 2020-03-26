import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const Component = styled(CircularProgress)`
  margin: 0 auto;
`;

export default function Loader() {
    return <Component />
}
