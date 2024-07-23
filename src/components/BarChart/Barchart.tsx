"use client";
import React from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid
} from "recharts";

export type BarChartProps = {
  data:{
    month:string,
    total:number,
  }[]
};
const getColorByTotal = (total: number) => {
  if (total < 50) return "#FF8042"; // Low value
  if (total < 50) return "#00C49F"; // Medium value
  return "#FF7300"; // High value
};


export default function Barchart({data}: BarChartProps) {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <CartesianGrid strokeDasharray='3 3'/>
        <XAxis
          dataKey={"month"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          dataKey={"total"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={13}
          tickFormatter={(value) => `${value}`}
        />
         <Bar dataKey={"total"} radius={[4, 4, 0, 0]}  fill="#0088FE"/>
       
      </BarGraph>
    </ResponsiveContainer>
  );
}