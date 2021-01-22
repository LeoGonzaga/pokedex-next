import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

function Graph({ stast, color }) {
  console.log(stast);

  const data = [
    {
      subject: "HP",
      A: 120,
      fullMark: 150,
    },
    {
      subject: "Ataque",
      A: 98,
      fullMark: 150,
    },
    {
      subject: "Defesa",
      A: 86,
      fullMark: 150,
    },
    {
      subject: "Ataque esp",
      A: 99,
      fullMark: 150,
    },
    {
      subject: "Defesa Esp",
      A: 85,
      fullMark: 150,
    },
  ];

  stast.map((stast, i) => {
    data.map((d, index) => {
      if (i == index) {
        d.A = stast.base_stat;
      }
    });
  });

  return (
    <RadarChart
      cx={150}
      cy={150}
      outerRadius={150}
      width={300}
      height={300}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />

      <Radar
        name="Poder"
        dataKey="A"
        stroke={color ? color : "#82ca9d"}
        fill={color ? color : "#82ca9d"}
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
}

export default Graph;
