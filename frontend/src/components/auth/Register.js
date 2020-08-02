import React, { useState, useContext } from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../contexts/userContext";

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    displayName: "",
  });

  const history = useHistory();

  const { setUserData } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = credentials;

    await Axios.post("http://localhost:5000/users/register", newUser);

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
    setCredentials({
      email: "",
      password: "",
      passwordCheck: "",
      displayName: "",
    });

    history.push("/");
  };

  return (
    <Box component="div">
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Register</Typography>
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
        <TextField
          required
          name="passwordCheck"
          label="Verify Password"
          type="password"
          variant="outlined"
          value={credentials.passwordCheck}
          onChange={(e) =>
            setCredentials({ ...credentials, passwordCheck: e.target.value })
          }
        />
        <br /> <br />
        <TextField
          required
          name="displayName"
          label="Display Name"
          type="text"
          variant="outlined"
          value={credentials.displayName}
          onChange={(e) =>
            setCredentials({ ...credentials, displayName: e.target.value })
          }
        />
        <br /> <br />
        <Button variant="outlined" type="submit">
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
