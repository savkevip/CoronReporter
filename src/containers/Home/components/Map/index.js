import React, { memo, useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { noop } from "lodash/fp";
import { scaleQuantize } from "d3-scale";
import { colors } from "../../../../utils/colors";
import { MapContainer } from "./styles";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
    "#ffedea",
    "#ffedea",
    "#ffedea",
    "#ffedea",
    "#ffedea",
    "#ffedea",
    "#ffedea",
    "#ffedea",
    "#ffedea"
  ]);

const markers = [
  { markerOffset: 15, name: "Beograd", coordinates: [20.463594, 44.804989] },
  { markerOffset: -30, name: "Novi Sad", coordinates: [19.833549, 45.267136] },
  { markerOffset: -30, name: "Pristina", coordinates: [21.166191, 42.667542] },
  { markerOffset: -30, name: "Sarajevo", coordinates: [18.413029, 43.856430] },
  { markerOffset: -30, name: "Trebinje", coordinates: [18.349470, 42.707127] },
  { markerOffset: 15, name: "Zagreb", coordinates: [15.966568, 45.815399] },
  { markerOffset: 15, name: "Split", coordinates: [16.440193, 43.508133] },
  { markerOffset: 15, name: "Podgorica", coordinates: [19.268646, 42.442574] },
  { markerOffset: 15, name: "Skoplje", coordinates: [21.43141, 41.99646] }
];

export default memo(function Map({ setDetailsContent }) {
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
          rotate: [-20.0, -43.0, 0],
          scale: 2500
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const { NAME } = geo.properties;
              const cur = data.find(s => s.NAME === NAME);
              const color = cur ? colorScale(cur.CORONA_RATE) : colors.map;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke={color}
                  fill={color}
                  onClick={() => {
                    const content = NAME === "Kosovo" ? "Serbia" : NAME;
                    cur ? setDetailsContent(content) : noop();
                  }}
                  style={{
                    hover: {
                      cursor: cur ? "pointer" : "not-allowed"
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates}>
                  <g
                      fill="none"
                      stroke="#FF5533"
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
