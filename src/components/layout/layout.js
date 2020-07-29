import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  topRoot: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.primary,
  },
  sideRoot: {
    backgroundColor: "#30c39e",
  },
  menuList: {
    padding: theme.spacing(0),
  },
  eachMenu: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    textAlign: "center",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Layout = (props) => {
  const classes = useStyles();

  console.log(props);
  return (
    <div className={classes.topRoot}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0} square>
            마스터님, 환영합니다.
          </Paper>
        </Grid>
        <Grid item xs="auto">
          <div className={classes.sideRoot}>
            <List
              className={classes.menuList}
              component="nav"
              aria-label="menu"
            >
              <ListItem className={classes.eachMenu} button>
                <ListItemText primary="자산종합" />
              </ListItem>
              <ListItem className={classes.eachMenu} button>
                <ListItemText primary="주식상세" />
              </ListItem>
              <ListItem className={classes.eachMenu} button>
                <ListItemText primary="업종별" />
              </ListItem>
              <ListItemLink className={classes.eachMenu} href="#simple-list">
                <ListItemText primary="+" />
              </ListItemLink>
            </List>
          </div>
        </Grid>
        <Grid item xs="auto">
          {props.children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
