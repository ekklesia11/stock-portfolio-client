import React from "react";
import axios from "axios";

function App() {
  const [code, setCode] = React.useState("");
  const [shareInfo, setShareInfo] = React.useState({});

  const getInfo = async () => {
    const body = await axios.get(`http://localhost:5000?code=${code}`);
    setShareInfo({ ...body.data });
  };

  return (
    <div>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={getInfo}>정보 가져오기</button>
      <div>
        <div>종목이름: {shareInfo.JongName ? shareInfo.JongName : null}</div>
        <div>현재주가: {shareInfo.CurJuka ? shareInfo.CurJuka : null}</div>
        <div>최고가: {shareInfo.HighJuka ? shareInfo.HighJuka : null}</div>
        <div>최저가: {shareInfo.LowJuka ? shareInfo.LowJuka : null}</div>
        <div>
          금일시작가: {shareInfo.StartJuka ? shareInfo.StartJuka : null}
        </div>
      </div>
    </div>
  );
}

export default App;
