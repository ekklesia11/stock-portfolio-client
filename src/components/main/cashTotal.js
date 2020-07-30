import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridItemTotal: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  },
  gridItemCash: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },
  gridItemInvest: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  },
  gridItemRate: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  gridItemProfit: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },
}));

const CashTotal = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.gridItemTotal}>
          <Paper
            elevation={0}
            square
            variant="outlined"
            className={classes.paper}
          >
            총 주식 자산
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.gridItemCash}>
          <Paper
            elevation={0}
            square
            variant="outlined"
            className={classes.paper}
          >
            총 현금 자산
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5} className={classes.gridItemInvest}>
          <Paper
            elevation={0}
            square
            variant="outlined"
            className={classes.paper}
          >
            주식 투자 총액
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2} className={classes.gridItemRate}>
          <Paper
            elevation={0}
            square
            variant="outlined"
            className={classes.paper}
          >
            수익률
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5} className={classes.gridItemProfit}>
          <Paper
            elevation={0}
            square
            variant="outlined"
            className={classes.paper}
          >
            평가손익
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CashTotal;
