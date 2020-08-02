import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import AuthOptions from "../auth/AuthOptions";

const Header = () => {
  return (
    <Box component="div">
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography>Auth Boiler</Typography>
          </Link>

          <AuthOptions />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
