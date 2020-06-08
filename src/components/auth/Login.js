import React, { useState } from "react";
import { handleFieldChange } from "../../helpers/Helpers";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

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
            <label htmlFor="inputUsername">Username </label>
            <input
              type="text"
              id="username"
              onChange={(evt) =>
                handleFieldChange(evt, credentials, setCredentials)
              }
              required
              placeholder="Username"
              autoFocus=""
            />
            <br />
            <label htmlFor="inputPassword">Password </label>
            <input
              type="password"
              onChange={(evt) =>
                handleFieldChange(evt, credentials, setCredentials)
              }
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
    </>
  );
};

export default Login;
