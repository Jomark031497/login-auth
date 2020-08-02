import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translate(-60%, -50%)",
    margin: "0 auto",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <Typography variant="h5">© Jomark Pangan</Typography>
    </Box>
  );
};

export default Footer;
