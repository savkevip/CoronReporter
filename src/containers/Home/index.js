import React from "react";
import { Link } from "react-router-dom";
import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule
} from "react-simple-maps";
import { colors } from "../../utils/colors";
import { Container, MapContainer } from "./styles";

export default function Home() {
    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  return (
    <Container>
      <h1>Home</h1>
      <Link to={"/registration"}>go to Registration.</Link>
        <MapContainer>
            <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{
                    rotate: [-20.0, -45.0, 0],
                    scale: 2500
                }}
            >
                <Graticule stroke={colors.main} />
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={colors.font}
                                stroke={colors.subMain}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </MapContainer>
    </Container>
  );
}
