import React, { useState, useContext } from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../contexts/userContext";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem",
  },
  form: {
    padding: "1rem",
    textAlign: "center",
  },
  textfield: {
    margin: "0.5rem auto",
  },
  button: {
    margin: "0.5rem auto",
    background: "#781b14",
    color: "#fff",
    fontSize: theme.spacing(4)
  },
}));
const Register = () => {
  const classes = useStyles();

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
    <Box component="div" className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Typography variant="h5">Register</Typography>
        <TextField
          required
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          size="small"
          fullWidth
          className={classes.textfield}
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />

        <TextField
          required
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          size="small"
          fullWidth
          className={classes.textfield}
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />

        <TextField
          required
          name="passwordCheck"
          label="Verify Password"
          type="password"
          variant="outlined"
          size="small"
          fullWidth
          className={classes.textfield}
          value={credentials.passwordCheck}
          onChange={(e) =>
            setCredentials({ ...credentials, passwordCheck: e.target.value })
          }
        />

        <TextField
          required
          name="displayName"
          label="Display Name"
          type="text"
          variant="outlined"
          size="small"
          fullWidth
          className={classes.textfield}
          value={credentials.displayName}
          onChange={(e) =>
            setCredentials({ ...credentials, displayName: e.target.value })
          }
        />

        <Button
          variant="contained"
          type="submit"
          size="medium"
          className={classes.button}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
