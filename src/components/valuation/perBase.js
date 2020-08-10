import React, { useState, useEffect } from "react";

const PerBase = ({ EPS, PER, setEPS, addPER, resetPER }) => {
  // const [eps, setEps] = useState("");
  const [per, setPer] = useState("");
  // const [perGroup, setPerGroup] = useState([]);
  const [epsPerResult, setEpsPerResult] = useState("");
  const [avgPer, setAvgPer] = useState(0);

  console.log("from redux state", EPS);
  console.log("from redux state", PER);

  useEffect(() => {
    calculateAvgPer(PER);
  }, [PER]);

  const calculateAvgPer = (pers) => {
    let avg = pers.reduce((acc, cur) => acc + Number(cur), 0) / pers.length;
    setAvgPer(avg.toFixed(2));
  };

  const reset = () => {
    setEPS("");
    setPer("");
    setEpsPerResult("");
    setAvgPer(0);
  };

  return (
    <div>
      <fieldset>
        <legend>
          <h2>1. EPS x 평균 PER</h2>
        </legend>
        <label>EPS: </label>
        <input
          type="text"
          value={EPS}
          onChange={(e) => setEPS(e.target.value)}
        />
        <br />
        <br />
        <label>PER: </label>
        {PER.length ? <strong>평균 {avgPer}</strong> : null}
        <ul>
          {PER.map((per, i) => (
            <li key={i}>{per}</li>
          ))}
        </ul>
        <input
          type="text"
          value={per}
          onChange={(e) => setPer(e.target.value)}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              addPER(e.target.value);
              setPer("");
            }
          }}
        />
        <button
          onClick={() => {
            addPER(per);
            setPer("");
          }}
        >
          PER 추가
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            setEpsPerResult((avgPer * Number(EPS)).toFixed(2));
          }}
        >
          계산
        </button>
        <button
          onClick={() => {
            resetPER();
            setEpsPerResult("");
          }}
        >
          초기화
        </button>
        <br />
        <br />
        <label>결과: </label>
        <h1>{epsPerResult}</h1>
      </fieldset>
    </div>
  );
};

export default PerBase;
