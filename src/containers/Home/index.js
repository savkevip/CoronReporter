import React, { useState } from "react";
import Map from "./components/Map";
import Details from "./components/Details";
import { Link } from "react-router-dom";
import { Container, LocationWrapper } from "./styles";

export default function Home() {
  const [content, setDetailsContent] = useState("");
  return (
    <Container>
      <h1>Home</h1>
      <Link to={"/registration"}>go to Registration.</Link>
        <LocationWrapper>
            <Map setDetailsContent={setDetailsContent} />
            <Details content={content} />
        </LocationWrapper>
    </Container>
  );
}
