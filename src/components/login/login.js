import React from "react";

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
        <button>sign in</button>
        <button>sign up</button>
      </div>
    </div>
  );
};

export default Login;
