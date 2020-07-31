import React from "react";

import CashTotal from "./cashTotal";
import StockTotal from "./stockTotal";
import ChartTotal from "./chartTotal";
import StockTable from "./stockTable";

const Main = () => {
  return (
    <div>
      <CashTotal />
      <StockTotal />
      <ChartTotal />
      <StockTable />
    </div>
  );
};

export default Main;
