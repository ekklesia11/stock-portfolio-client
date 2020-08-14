import React from "react";
import styled from "styled-components";

import PieDiagram from "./pieDiagram";
import BarDiagram from "./barDiagram";

const ChartTotal = () => {
  return (
    <ChartLayout>
      <div className="pie">
        <PieDiagram />
        <PieDiagram />
      </div>
      <div className="bar">
        <BarDiagram />
        <BarDiagram />
      </div>
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  .pie {
    display: flex;
    justify-content: center;
  }
  .bar {
    display: flex;
    justify-content: center;
  }
`;

export default ChartTotal;
