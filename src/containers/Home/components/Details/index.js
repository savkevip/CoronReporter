import React from "react";
import Donut from 'react-svg-donuts';
import styled from "styled-components";

const Container = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
`;

const Chart = styled(Donut)`
  margin: 5px;
`;

export default function Details({ content }) {

    const progress = Math.floor(Math.random() * 100) + 1;
    const renderProgress = progress => <strong>{progress}%</strong>;

    return (
        <Container>
            <h1>{content}</h1>
            <Chart progress={progress} onRender={renderProgress} />
        </Container>
    )
}
