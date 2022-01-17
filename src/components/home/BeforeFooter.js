import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Instagram from "../../assets/Instagram.png";
import Facebook from "../../assets/Facebook.png";
import Twitter from "../../assets/Twitter.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "336px",
    backgroundColor: "#fff",
    padding: "25px",
    display: "flex",
    justifyContent: "space-between",
    // flexDirection:'column'
  },
  cols: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "space-evenly",
    flexDirection: "column",
    fontSize: "16px",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  myLinks: {
    fontSize: "16px",
    color: "#002D50",
  },
  //   res:{
  //   [theme.breakpoints.down('md')]:{
  //       minWidth:'100%'
  //   }
  //   }
}));

export default function BeforeFooter() {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{}} className={classes.cols}>
          <Box
            sx={{
              display: "flex",
              color: "#002D50",
              fontFamily: "#002D50",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Link to="#" sx={{}}>
              {" "}
              <Typography className={classes.myLinks}>
                {" "}
                Follow us |
              </Typography>{" "}
            </Link>
            <Link to="#">
              {" "}
              <img src={`${Instagram}`} alt="Instagram link" />{" "}
            </Link>
            <Link to="#">
              {" "}
              <img src={`${Facebook}`} alt="Facebook link" />{" "}
            </Link>
            <Link to="#">
              {" "}
              <img src={`${Twitter}`} alt="Instagram link" />{" "}
            </Link>
          </Box>
          <Box>
            <Link to="#">
              {" "}
              <Typography className={classes.myLinks}> About Us</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="#">
              {" "}
              <Typography className={classes.myLinks}> Contact Us</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="#">
              {" "}
              <Typography className={classes.myLinks}>
                {" "}
                Delivery Information{" "}
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link to="#">
              {" "}
              <Typography className={classes.myLinks}> FAQ</Typography>
            </Link>
          </Box>
        </Box>
        <Box sx={{ ml: 10, mt: 8 }}>
          <Link to="#">
            {" "}
            <Typography className={classes.myLinks}> Pricing plans</Typography>
          </Link>
          <Link to="#">
            {" "}
            <Typography className={classes.myLinks}> Privacy Policy</Typography>
          </Link>
          <Link to="#">
            {" "}
            <Typography className={classes.myLinks}>
              {" "}
              terms of service
            </Typography>
          </Link>
          <Link to="#">
            {" "}
            <Typography className={classes.myLinks}> Stores</Typography>
          </Link>
        </Box>
      </Box>
      
      
      
      <Box className={classes.cols} sx={{ mt: 3 }}>
        <Link to="#" className={classes.myLinks}>
          {" "}
          Join our exclusive mailing list and get first access to new releases.
        </Link>
        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 5 }}>
          <TextField sx={{ width: "100%" }}></TextField>
          <Button variant="contained"> Join</Button>
        </Box>
      </Box>
    </Box>
  );
}
