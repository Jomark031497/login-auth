import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center"
  },
}));
const Home = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Typography variant="h3">Blogerino</Typography>
    </Box>
  );
};

export default Home;
