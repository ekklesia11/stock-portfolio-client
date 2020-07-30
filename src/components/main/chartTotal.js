import React from "react";
import styled from "styled-components";

import PieDiagram from "./pieDiagram";
import BarDiagram from "./barDiagram";

const ChartLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const ChartTotal = () => {
  return (
    <ChartLayout>
      <PieDiagram />
      <div>
        <BarDiagram />
        <BarDiagram />
      </div>
    </ChartLayout>
  );
};

export default ChartTotal;
