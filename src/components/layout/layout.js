import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  topRoot: {
    flexGrow: 1,
  },
  paper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.primary,
  },
  sideRoot: {
    backgroundColor: "#30c39e",
    height: "calc(100vh - 68px)",
  },
  menuList: {
    padding: theme.spacing(0),
  },
  eachMenu: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#fff",
  },
}));

const LogoButton = withStyles((theme) => ({
  root: {
    color: "#30c39e",
    marginRight: theme.spacing(3),
    fontSize: 24,
  },
}))(Button);

const Layout = (props) => {
  const classes = useStyles();

  const sideMenus = [
    {
      title: "자산종합",
      link: "",
    },
    {
      title: "주식상세",
      link: "",
    },
    {
      title: "업종별",
      link: "",
    },
    {
      title: "+",
      link: "",
    },
  ];

  return (
    <div className={classes.topRoot}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0} square>
            <LogoButton color="primary">가치투자킹</LogoButton>
            마스터님, 환영합니다.
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <div className={classes.sideRoot}>
            <List
              className={classes.menuList}
              component="nav"
              aria-label="menu"
            >
              {sideMenus.map((menu, i) => (
                <ListItem key={i} className={classes.eachMenu} button>
                  <ListItemText primary={menu.title} />
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
        <Grid item xs={11} className={classes.main}>
          {props.children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
