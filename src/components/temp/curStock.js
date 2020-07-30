import React from "react";
import axios from "axios";

function CurStock() {
  const [stockInfo, setStockInfo] = React.useState({});
  const [stockList, setStockList] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const [selectedStock, setSelectedStock] = React.useState("");

  React.useEffect(() => {
    // getStockList();
  }, []);

  const getStockList = async () => {
    const body = await axios.get("http://localhost:5000/code");
    setStockList([...body.data]);
  };

  const searchFromStockList = () => {
    let result = stockList.filter(
      (v) => v.name.toLowerCase() === searchText.toLowerCase()
    );
    if (!result.length) {
      setSelectedStock("종목을 찾을 수가 없습니다.");
      return "";
    } else {
      setSelectedStock(`${result[0].name}: ${result[0].code}`);
      return result[0].code;
    }
  };

  const enterSearch = (e) => {
    if (e.key === "Enter") {
      naverSearch();
    }
  };

  const naverSearch = async () => {
    let code = searchFromStockList();

    if (code !== "") {
      const body = await axios.get(`http://localhost:5000/?code=${code}`);
      setStockInfo({ ...body.data });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onKeyPress={enterSearch}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={naverSearch}>검색</button>
      <h1>{selectedStock}</h1>
      <h2>현재가: {stockInfo.now ? stockInfo.now : "결과없음"}</h2>
    </div>
  );
}

export default CurStock;
