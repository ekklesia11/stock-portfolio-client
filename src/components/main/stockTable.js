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
  profit,
  dividend,
  dividendRate,
  tradingCompany
) => {
  return {
    sector,
    stockName,
    quantity,
    purchasedPrice,
    currentPrice,
    profitRate,
    profit,
    dividend,
    dividendRate,
    tradingCompany,
  };
};

const StockTable = () => {
  const [stocks, setStocks] = useState([
    createData(
      "반도체",
      "삼성전자",
      4,
      54000,
      60000,
      5.0,
      24000,
      300,
      0.1,
      "NH투자증권"
    ),
    createData(
      "바이오",
      "LG화학",
      3,
      510000,
      570000,
      14.5,
      180000,
      500,
      0.1,
      "NH투자증권"
    ),
    createData(
      "바이오",
      "LG화학",
      3,
      510000,
      570000,
      14.5,
      180000,
      500,
      0.1,
      "NH투자증권"
    ),
    createData(
      "바이오",
      "LG화학",
      3,
      510000,
      570000,
      14.5,
      180000,
      500,
      0.1,
      "NH투자증권"
    ),
    createData(
      "바이오",
      "LG화학",
      3,
      510000,
      570000,
      14.5,
      180000,
      500,
      0.1,
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
              <TableCell align="right">주당 매입가</TableCell>
              <TableCell align="right">주당 현재가</TableCell>
              <TableCell align="right">수익률</TableCell>
              <TableCell align="right">평가손익</TableCell>
              <TableCell align="right">주당 배당률</TableCell>
              <TableCell align="right">배당수익률</TableCell>
              <TableCell align="right">거래증권사</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {row.sector}
                </TableCell>
                <TableCell align="right">{row.stockName}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.purchasedPrice}</TableCell>
                <TableCell align="right">{row.currentPrice}</TableCell>
                <TableCell align="right">{row.profitRate}</TableCell>
                <TableCell align="right">{row.profit}</TableCell>
                <TableCell align="right">{row.dividend}</TableCell>
                <TableCell align="right">{row.dividendRate}</TableCell>
                <TableCell align="right">{row.tradingCompany}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StockTable;
