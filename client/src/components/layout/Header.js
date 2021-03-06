import React, { useContext } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import AuthOptions from "../auth/AuthOptions";
import userContext from "../../contexts/userContext";

const useStyles = makeStyles((theme) => ({
  root: {},
  logo: {
    flex: 1,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    marginLeft: "1rem",
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    background: "rgba(200,0,0,0.9)",
  },
}));
const Header = () => {
  const classes = useStyles();

  const { userData } = useContext(userContext);

  return (
    <Box component="div" className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.logo} variant="h5">
            <Link to="/" className={classes.link}>
              Blogerino
            </Link>
          </Typography>

          <AuthOptions />
          <IconButton>
            <Avatar className={classes.avatar}>{userData.displayName}</Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
