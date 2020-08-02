import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button } from "@material-ui/core";
import UserContext from "../../contexts/userContext";

const AuthOptions = () => {
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
        <Button onClick={handleLogout}>LogOut</Button>
      ) : (
        <>
          <Button onClick={() => history.push("/register")}>Register</Button>
          <Button onClick={() => history.push("/login")}>login</Button>{" "}
        </>
      )}
    </Box>
  );
};

export default AuthOptions;
