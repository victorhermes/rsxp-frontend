import React from "react";
import Header from "../../components/Header";
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from "bizcharts";
import { data, cols, data2, data3, data4 } from "../../data/chart-1";
import { Container, AllCharts } from "./styles";

function Dashboard() {
  return (
    <Container>
      <Header />
      <AllCharts>
        <Chart width={500} height={300} data={data} scale={cols}>
          <Axis name="genre" title />
          <Axis name="sold" title />
          <Legend position="top" dy={-20} />
          <Tooltip />
          <Geom type="interval" position="genre*sold" color="genre" />
        </Chart>

        <Chart width={450} height={300} data={data2} forceFit>
          <Coord transpose />
          <Axis
            name="country"
            label={{
              offset: 12
            }}
          />
          <Axis name="population" />
          <Tooltip />
          <Geom type="interval" position="country*population" />
        </Chart>

        <Chart width={450} height={300} data={data3} scale={cols} forceFit>
          <Axis name="year" />
          <Axis name="value" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="line" position="year*value" size={2} />
          <Geom
            type="point"
            position="year*value"
            size={4}
            shape={"circle"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>

        <Chart width={450} height={300} data={data4} scale={cols} forceFit>
          <Axis name="year" />
          <Axis name="value" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="line" position="year*value" size={2} />
          <Geom
            type="point"
            position="year*value"
            size={4}
            shape={"circle"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </AllCharts>
    </Container>
  );
}

export default Dashboard;
