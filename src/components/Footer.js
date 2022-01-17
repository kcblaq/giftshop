import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#002D50",
    height: "70px",
    minWidth: "100vw",
    textAlign: "center",
    color: "white",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Typography
        variant="p"
        sx={{
          fontSize: "12px",
          fontFamily: "Noto Sans",
          fontWeight: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ©2021 Giftshop Africa. All rights reserved
      </Typography>
    </div>
  );
}
