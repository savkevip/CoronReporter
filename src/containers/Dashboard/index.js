import React, { useState } from "react";
import Menu from "./components/Menu";
import Header from "../../common/Header";
import Map from "../../common/Map";
import MenuIcon from "@material-ui/icons/Menu";
import { Line, Pie } from "react-chartjs-2";
import {
  Container,
  AgesWrapper,
  LineChartWrapper,
  LocationWrapper,
  OverallWrapper,
  PieChartWrapper
} from "./styles";

const dataLine = {
  labels: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul"],
  datasets: [
    {
      label: "Mesečni prikaz",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const dataPie = {
  labels: ["0-29", "29-64", "65+"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>
        <MenuIcon style={{ cursor: "pointer" }} onClick={() => setOpen(true)} />
      </Header>
      <Container>
        <OverallWrapper>
          <LocationWrapper>
            <Map />
          </LocationWrapper>
          <LineChartWrapper>
            <Line data={dataLine} />
          </LineChartWrapper>
        </OverallWrapper>
        <AgesWrapper>
          <PieChartWrapper>
            <h5>Starost</h5>
            <Pie data={dataPie} />
          </PieChartWrapper>
        </AgesWrapper>
      </Container>
      <Menu setOpen={setOpen} open={open} />
    </>
  );
}
