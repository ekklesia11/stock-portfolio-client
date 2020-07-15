import React from "react";

import SocialBtns from "./socialBtns";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField id="standard-basic" label="Email" />
        </div>
        <div>
          <TextField id="standard-basic" label="Password" />
        </div>
      </form>
      <div>
        <Button variant="contained" color="primary">
          sign in
        </Button>
        <Button color="primary">sign up</Button>
      </div>
      <SocialBtns />
    </div>
  );
};

export default Login;
