import React, { useState, useEffect } from "react";

const PerBase = () => {
  const [eps, setEps] = useState("");
  const [per, setPer] = useState("");
  const [perGroup, setPerGroup] = useState([]);
  const [epsPerResult, setEpsPerResult] = useState("");
  const [avgPer, setAvgPer] = useState(0);

  useEffect(() => {
    calculateAvgPer(perGroup);
  }, [perGroup]);

  const calculateAvgPer = (pers) => {
    if (pers.length) {
      let avg = pers.reduce((acc, cur) => acc + Number(cur), 0) / pers.length;
      setAvgPer(avg.toFixed(2));
    }
  };

  const addPer = () => {
    if (per !== "") {
      setPerGroup((prev) => [...prev, per]);
      setPer("");
    } else {
      alert("추가할 PER 정보가 없습니다!");
    }
  };

  const reset = () => {
    setEps("");
    setPer("");
    setPerGroup((prev) => []);
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
          value={eps}
          onChange={(e) =>
            Number(e.target.value)
              ? setEps(e.target.value)
              : alert("숫자를 입력하세요")
          }
        />
        <br />
        <br />
        <label>PER: </label>
        {avgPer !== "" ? <strong>평균 {avgPer}</strong> : null}
        <ul>
          {perGroup.map((per, i) => (
            <li key={i}>{per}</li>
          ))}
        </ul>
        <input
          type="text"
          value={per ? per : ""}
          onChange={(e) =>
            Number(e.target.value) >= 0 || e.target.value === ""
              ? setPer(e.target.value)
              : alert("숫자를 입력하세요")
          }
          onKeyUp={(e) => (e.keyCode === 13 ? addPer() : null)}
        />
        <button onClick={addPer}>PER 추가</button>
        <br />
        <br />
        <button
          onClick={() => {
            setEpsPerResult((avgPer * Number(eps)).toFixed(2));
          }}
        >
          계산
        </button>
        <button onClick={reset}>초기화</button>
        <br />
        <br />
        <label>결과: </label>
        <h1>{epsPerResult}</h1>
      </fieldset>
    </div>
  );
};

export default PerBase;
