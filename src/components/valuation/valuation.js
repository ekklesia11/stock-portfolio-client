import React, { useState } from "react";
import styled from "styled-components";

// EPS * avg PER(5 years)
// BPS * avg PBR(5 years)
// EPS * ROE(percentage)
const Valuation = () => {
  const [eps, setEps] = useState("");
  // const [bps, setBps] = useState("");
  const [per, setPer] = useState("");
  // const [pbr, setPbr] = useState("");
  // const [roe, setRoe] = useState("");
  const [perGroup, setPerGroup] = useState([]);
  // const [pbrGroup, setPbrGroup] = useState([]);
  // const [roeGroup, setRoeGroup] = useState([]);
  const [epsPerResult, setEpsPerResult] = useState("");
  // const [bpsPbrResult, setBpsPbrResult] = useState("");
  // const [epsRoeResult, setEpsRoeResult] = useState("");
  const [avgPer, setAvgPer] = useState("");

  const calculateAvgPer = (pers) => {
    return pers.reduce((acc, cur) => acc + cur, 0) / pers.length;
  };

  return (
    <div>
      <fieldset>
        <legend>
          <h2>1. EPS x 5년간 평균 PER</h2>
        </legend>
        <label>EPS: </label>
        <input
          type="text"
          value={eps}
          onChange={(e) => setEps(e.target.value)}
        />
        <br />
        <br />
        <label>PER: </label>
        {avgPer !== "" ? <strong>평균 {avgPer}</strong> : null}
        <ul>
          {perGroup.map((per) => (
            <li>{per}</li>
          ))}
        </ul>
        <input
          type="text"
          value={per}
          onChange={(e) => setPer(e.target.value)}
        />
        <button
          onClick={() => {
            if (per !== "") {
              setPerGroup((prev) => [...prev, per]);
              setPer("");
            } else {
              alert("추가할 PER 정보가 없습니다!");
            }
          }}
        >
          PER 추가
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            setEpsPerResult(1);
          }}
        >
          계산
        </button>
        <br />
        <br />
        <label>결과: </label>
        <h1>{epsPerResult}</h1>
      </fieldset>
      {/* <fieldset>
          <legend>
            <h2>2. BPS x 5년간 평균 PBR</h2>
          </legend>
          <label>BPS: </label>
          <input type="text" value={eps} />
        </fieldset>
        <fieldset>
          <legend>
            <h2>3. EPS x 5년간 평균 ROE(percentage)</h2>
          </legend>
          <label>EPS: </label>
          <input type="text" value={eps} />
        </fieldset> */}
    </div>
  );
};

export default Valuation;
