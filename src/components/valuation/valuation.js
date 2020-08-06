import React, { useState, useEffect } from "react";

// EPS * avg PER(5 years)
// BPS * avg PBR(5 years)
// EPS * ROE(percentage)
import PerBase from "./perBase";
import PbrBase from "./pbrBase";
import RoeBase from "./roeBase";

const Valuation = () => {
  return (
    <div>
      <PerBase />
      <PbrBase />
      <RoeBase />
    </div>
  );
};

export default Valuation;
