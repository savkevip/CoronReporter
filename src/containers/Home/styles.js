import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  padding: 25px;
`;

export const Button = styled(Link)`
  padding: 10px 15px;
  background: ${colors.button};
  border-radius: 5px;
  text-decoration: none;
  color: ${colors.main};
  transition: .3s;

  &:hover {
    -webkit-box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.75);
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.75);
  }
`;

export const LocationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
