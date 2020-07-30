import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridItemStock: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  },
  gridItemShare: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  gridItemDividend: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  gridItemShareTax: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  gridItemDividendTax: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },
}));

const StockTotal = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={3} className={classes.gridItemStock}>
          <Paper
            elevation={0}
            square
            variant="outlined"
            className={classes.paper}
          >
            보유 종목수
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.gridItemShare}>
          <Paper
            elevation={0}
            square
            variant="outlined"
            className={classes.paper}
          >
            주식 총 보유량
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2} className={classes.gridItemDividend}>
          <Paper
            elevation={0}
            square
            variant="outlined"
            className={classes.paper}
          >
            별도 배당수익
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2} className={classes.gridItemShareTax}>
          <Paper
            elevation={0}
            square
            variant="outlined"
            className={classes.paper}
          >
            주식세
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2} className={classes.gridItemDividendTax}>
          <Paper
            elevation={0}
            square
            variant="outlined"
            className={classes.paper}
          >
            배당세
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default StockTotal;
