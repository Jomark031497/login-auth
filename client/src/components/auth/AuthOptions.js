import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button } from "@material-ui/core";
import UserContext from "../../contexts/userContext";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  buttons: {
    color: "#fff",
    height: "100%",
  },
}));
const AuthOptions = () => {
  const classes = useStyles();

  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });

    localStorage.setItem("auth-token", "");
  };

  return (
    <Box component="div">
      {userData.user ? (
        <Button onClick={handleLogout} className={classes.buttons}>
          LogOut
        </Button>
      ) : (
        <>
          <Button
            onClick={() => history.push("/register")}
            className={classes.buttons}
          >
            Register
          </Button>
          <Button
            onClick={() => history.push("/login")}
            className={classes.buttons}
          >
            login
          </Button>{" "}
        </>
      )}
    </Box>
  );
};

export default AuthOptions;
