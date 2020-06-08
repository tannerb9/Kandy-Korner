import React, { useState } from "react";
import { handleFieldChange } from "../../helpers/Helpers";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = (evt) => {
    evt.preventDefault();
    sessionStorage.setItem("credentials", JSON.stringify(credentials));
    props.history.push("/");
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              type="email"
              onChange={(evt) =>
                handleFieldChange(evt, credentials, setCredentials)
              }
              required
              placeholder="E-mail address"
              autoFocus=""
            />
            <label htmlFor="inputEmail">Email address</label>
            <input
              type="password"
              onChange={(evt) =>
                handleFieldChange(evt, credentials, setCredentials)
              }
              id="password"
              placeholder="Password"
              required
            />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
    </>
  );
};

export default Login;
