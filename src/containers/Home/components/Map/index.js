import React, { memo, useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { colors } from "../../../../utils/colors";
import { MapContainer } from "./styles";

const SCALE = 5500;
const ROTATE_LEFT = -19.0;
const ROTATE_RIGHT = -43.9;
const ROTATE_MIDDLE = 0;
const MARKER_OFFSET = 15;
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: MARKER_OFFSET, name: "Beograd", coordinates: [20.463594, 44.804989] },
  { markerOffset: MARKER_OFFSET, name: "Pancevo", coordinates: [20.658350, 44.870961] },
  { markerOffset: MARKER_OFFSET, name: "Novi Sad", coordinates: [19.833549, 45.267136] },
  { markerOffset: MARKER_OFFSET, name: "Pristina", coordinates: [21.166191, 42.667542] },
  { markerOffset: MARKER_OFFSET, name: "Sarajevo", coordinates: [18.413029, 43.856430] },
  { markerOffset: MARKER_OFFSET, name: "Trebinje", coordinates: [18.349470, 42.707127] },
  { markerOffset: MARKER_OFFSET, name: "Zagreb", coordinates: [15.966568, 45.815399] },
  { markerOffset: MARKER_OFFSET, name: "Split", coordinates: [16.440193, 43.508133] },
  { markerOffset: MARKER_OFFSET, name: "Podgorica", coordinates: [19.268646, 42.442574] },
  { markerOffset: MARKER_OFFSET, name: "Skoplje", coordinates: [21.43141, 41.99646] },
  { markerOffset: MARKER_OFFSET, name: "Maribor", coordinates: [15.6459, 46.5547] }
];

export default memo(function Map() {
  const [data, setData] = useState([
    {
      NAME: "Serbia",
      CORONA_RATE: 8
    },
    {
      NAME: "Kosovo",
      CORONA_RATE: 8
    },
    {
      NAME: "Bosnia and Herz.",
      CORONA_RATE: 4
    },
    {
      NAME: "Croatia",
      CORONA_RATE: 10
    },
    {
      NAME: "Montenegro",
      CORONA_RATE: 2
    },
    {
      NAME: "Macedonia",
      CORONA_RATE: "4"
    },
      {
          NAME: "Slovenia",
          CORONA_RATE: "6"
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
                  stroke={color}
                  fill={color}
                />
              );
            })
          }
        </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates}>
                  <g
                      fill="none"
                      stroke={colors.marker}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="translate(-12, -24)"
                  >
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                  <text
                      textAnchor="middle"
                      y={markerOffset}
                      style={{ fontFamily: "system-ui", fill: colors.font, fontSize: '10px' }}
                  >
                      {name}
                  </text>
              </Marker>
          ))}
      </ComposableMap>
    </MapContainer>
  );
});
