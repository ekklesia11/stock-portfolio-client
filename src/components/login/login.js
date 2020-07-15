import React from "react";
import Button from "@material-ui/core/Button";

const Login = () => {
  return (
    <div>
      <div>
        <label>email</label>
        <input type="text" />
      </div>
      <div>
        <label>password</label>
        <input type="text" />
      </div>
      <div>
        <Button variant="contained" color="primary">
          sign in
        </Button>
        <Button color="primary">sign up</Button>
      </div>
    </div>
  );
};

export default Login;
