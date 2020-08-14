import React from "react";

import CashTotal from "./cashTotal";
import StockTotal from "./stockTotal";
import ChartTotal from "./chartTotal";

const Main = () => {
  return (
    <div>
      <CashTotal />
      <StockTotal />
      <ChartTotal />
    </div>
  );
};

export default Main;
