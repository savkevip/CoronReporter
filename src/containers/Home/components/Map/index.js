import React, { memo, useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
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
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);

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
          scale: 2000
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
      </ComposableMap>
    </MapContainer>
  );
});
