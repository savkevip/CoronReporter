import React, { useState } from "react";
import Map from "./components/Map";
import Details from "./components/Details";
import Header from "../../common/Header";
import { Container, LocationWrapper, Button } from "./styles";

export default function Home() {
  const [content, setDetailsContent] = useState("");
  return (
    <Container>
        <Header>
            <Button to={"/registration"}>PRIJAVI SIMPTOME</Button>
        </Header>
      <h1>Map</h1>
        <LocationWrapper>
            <Map setDetailsContent={setDetailsContent} />
            {content && <Details content={content} />}
        </LocationWrapper>
    </Container>
  );
}
