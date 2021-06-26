import React from "react";
import { Chart, Geometry, Axis } from "../src";
import "./App.css";

function App(): JSX.Element {
  const data = [
    { genre: "Sports", sold: 275 },
    { genre: "Strategy", sold: 115 },
    { genre: "Action", sold: 120 },
    { genre: "Shooter", sold: 350 },
    { genre: "Other", sold: 150 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Chart source={data}>
          <Geometry type="interval" />
          <Geometry type="line" />
          <Axis />
        </Chart>
      </header>
    </div>
  );
}

export default App;
