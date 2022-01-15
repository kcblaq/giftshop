import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import Logo from "../../assets/Logo.png";
import "./Home.css";
import { Button, Card, Grid, Paper, Typography } from "@mui/material";
import { Badge } from "@mui/material/Badge";
import redeem from "../../assets/redeem.png";
import Group from "../../assets/Group.png";
import echo1 from "../../assets/echo1.png";
import shop1 from "../../assets/shop1.png";
import EastIcon from "@mui/icons-material/East";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "3rems",
    [theme.breakpoints.down('md')]:{
        display:'flex',
        flexDirection:'column',
        width:'100%'
    }
  },
  text: {
    fontSize: '4rem',
    textAlign:'center',
    
  },
  box:{
      display:'flex',
      flexDirection:'row',
  [theme.breakpoints.down('sm')]:{
      flexDirection:'column'
  }
  },
  grid: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  mainb: {
    display: "flex",
    justifyContent: "space-around",
  },
  red: {
    color: "red",
    fontSize: "4rem",
    borderRadius: "4rem",
    textAlign: "center",
  },
  perRow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "3rem",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      width: "100vw",
    },
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Main = styled("div")((theme) => ({
  minHeight: "6rem",
  // width: '100%',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

function SecondLayer() {
  const info = [
    {
      title: "Redeem",
      text: "Giftshop Africa helps brands with loyalty program as well as help individuals get gift ideas for their loved ones.",
      image: Group,
    },

    {
      title: "Shop",
      text: "Giftshop Africa helps brands with loyalty program as well as help individuals get gift ideas for their loved ones.",
      image: shop1,
    },
    {
      title: "Echo",
      text: "Giftshop Africa helps brands with loyalty program as well as help individuals get gift ideas for their loved ones.",
      image: echo1,
    },
  ];

  const classes = useStyles();
  return (
    <div className={classes.main} >
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <img src={`${Logo}`} alt="Logo" />
      </Box>

      <Box className={classes.box}>
        {info.map(function (item) {
          return (
            <Grid
            container
              className={classes.grid}
              sx={{ width: { sm: "100%" } }}
              spacing={1}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item>
                <Box className={classes.perRow}>
                  <Typography>
                    {item.title} <span className={classes.red}>.</span>{" "}
                  </Typography>
                  <Box>
                    {" "}
                    <img src={`${item.image}`} alt={item.title} />
                  </Box>
                  <Typography
                    className={classes.text}
                    sx={{ textWrap: "wrap", mt:{md:'2rem',sm:'1rem'}}}
                  >
                    {" "}
                    {item.text}{" "}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 3rem",
        }}
      >
        <Button size="small" variant="contained"> Buy Giftcard</Button>
        <Button size="small">
          {" "}
          Learn More <EastIcon />{" "}
        </Button>
      </Box>
    </div>
  );
}

export default SecondLayer;
