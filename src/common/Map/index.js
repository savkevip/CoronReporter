import React, { memo, useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { colors } from "../../utils/colors";
import { MapContainer } from "./styles";

const SCALE = 7700;
const ROTATE_LEFT = -20.5;
const ROTATE_RIGHT = -44;
const ROTATE_MIDDLE = 0;
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  {
    numberWithSymptoms: 245,
    name: "Beograd",
    coordinates: [20.463594, 44.804989]
  },
  {
    numberWithSymptoms: 213,
    name: "Pancevo",
    coordinates: [20.65835, 44.870961]
  },
  {
    numberWithSymptoms: 14,
    name: "Novi Sad",
    coordinates: [19.833549, 45.267136]
  },
  {
    numberWithSymptoms: 25123,
    name: "Pristina",
    coordinates: [21.166191, 42.667542]
  },
  {
    numberWithSymptoms: 500,
    name: "Kosovska Mitrovica",
    coordinates: [20.866, 42.8914]
  }
];

const colorScale = scaleQuantile()
  .domain(markers.map(d => d.numberWithSymptoms))
  .range([
    "#efff7f",
    "#ffca7b",
    "#ff8554",
    "#ff6c4c",
    "#ff5533",
    "#e24131",
    "#be121b"
  ]);

export default memo(function Map() {
  const [data, setData] = useState([
    {
      NAME: "Serbia",
      CORONA_RATE: 8
    },
    {
      NAME: "Kosovo",
      CORONA_RATE: 8
    }
  ]);

  // useEffect(() => {
  //     setData([
  //         {}
  //     ]);
  // }, []);

  return (
    <MapContainer>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [ROTATE_LEFT, ROTATE_RIGHT, ROTATE_MIDDLE],
          scale: SCALE
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const { NAME } = geo.properties;
              const cur = data.find(s => s.NAME === NAME);
              const color = cur ? colors.supportedCountries : colors.map;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke={cur ? color : colors.mapBorder}
                  fill={color}
                />
              );
            })
          }
        </Geographies>
        {markers.map(({ name, coordinates, numberWithSymptoms }) => {
          const average = numberWithSymptoms / 100;
          const R = average > 50 ? 50 : average;
          return (
            <Marker key={name} coordinates={coordinates}>
              <circle
                r={R}
                fill={colorScale(numberWithSymptoms)}
                strokeWidth={1}
              />
            </Marker>
          );
        })}
      </ComposableMap>
    </MapContainer>
  );
});
