import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

const createData = (
  sector,
  stockName,
  quantity,
  purchasedPrice,
  currentPrice,
  profitRate,
  totalPurchasedPrice,
  totalSellingPrice,
  profit,
  dividend,
  marketCap,
  totalAsset,
  totalLiability,
  totalEquity,
  liabilityRate,
  ROE,
  ROA,
  EPS,
  PER,
  BPS,
  PBR,
  tradingCompany
) => {
  return {
    sector,
    stockName,
    quantity,
    purchasedPrice,
    currentPrice,
    profitRate,
    totalPurchasedPrice,
    totalSellingPrice,
    profit,
    dividend,
    marketCap,
    totalAsset,
    totalLiability,
    totalEquity,
    liabilityRate,
    ROE,
    ROA,
    EPS,
    PER,
    BPS,
    PBR,
    tradingCompany,
  };
};

const Detail = () => {
  const [stocks, setStocks] = useState([
    createData(
      "반도체",
      "삼성전자",
      4,
      54000,
      60000,
      5.0,
      216000,
      240000,
      24000,
      352,
      "350조 2000억",
      100000,
      8000,
      992000,
      0.9,
      10,
      10,
      5000,
      2000,
      20,
      20,
      "NH투자증권"
    ),
  ]);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>업종</TableCell>
              <TableCell align="right">종목명</TableCell>
              <TableCell align="right">보유량</TableCell>
              <TableCell align="right">매입가(원)</TableCell>
              <TableCell align="right">현재가</TableCell>
              <TableCell align="right">수익률(%)</TableCell>
              <TableCell align="right">총 매입가(원)</TableCell>
              <TableCell align="right">총 매도가</TableCell>
              <TableCell align="right">평가손익</TableCell>
              <TableCell align="right">배당금</TableCell>
              <TableCell align="right">시가총액</TableCell>
              <TableCell align="right">자산총액(억원)</TableCell>
              <TableCell align="right">부채총액</TableCell>
              <TableCell align="right">자본총액</TableCell>
              <TableCell align="right">부채율(%)</TableCell>
              <TableCell align="right">ROE</TableCell>
              <TableCell align="right">ROA</TableCell>
              <TableCell align="right">EPS(원)</TableCell>
              <TableCell align="right">BPS</TableCell>
              <TableCell align="right">PER(배)</TableCell>
              <TableCell align="right">PBR</TableCell>
              <TableCell align="right">거래증권</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.sector}
                </TableCell>
                <TableCell align="right">{row.stockName}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.purchasedPrice}</TableCell>
                <TableCell align="right">{row.currentPrice}</TableCell>
                <TableCell align="right">{row.profitRate}</TableCell>
                <TableCell align="right">{row.totalPurchasedPrice}</TableCell>
                <TableCell align="right">{row.totalSellingPrice}</TableCell>
                <TableCell align="right">{row.profit}</TableCell>
                <TableCell align="right">{row.dividend}</TableCell>
                <TableCell align="right">{row.marketCap}</TableCell>
                <TableCell align="right">{row.totalAsset}</TableCell>
                <TableCell align="right">{row.totalLiability}</TableCell>
                <TableCell align="right">{row.totalEquity}</TableCell>
                <TableCell align="right">{row.liabilityRate}</TableCell>
                <TableCell align="right">{row.ROE}</TableCell>
                <TableCell align="right">{row.ROA}</TableCell>
                <TableCell align="right">{row.EPS}</TableCell>
                <TableCell align="right">{row.PER}</TableCell>
                <TableCell align="right">{row.BPS}</TableCell>
                <TableCell align="right">{row.PBR}</TableCell>
                <TableCell align="right">{row.tradingCompany}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Detail;
