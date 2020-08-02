import React, { useState, useContext } from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../contexts/userContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const { setUserData } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginResponse = await Axios.post(
      "http://localhost:5000/users/login",
      {
        email: credentials.email,
        password: credentials.password,
      }
    );

    setUserData({
      token: loginResponse.data.token,
      user: loginResponse.data.user,
    });

    localStorage.setItem("auth-token", loginResponse.data.token);

    history.push("/");
  };

  return (
    <Box component="div">
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Log In</Typography>
        <TextField
          required
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <br /> <br />
        <TextField
          required
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <br /> <br />
        <Button variant="outlined" type="submit">
          Log In
        </Button>
      </form>
    </Box>
  );
};

export default Login;
