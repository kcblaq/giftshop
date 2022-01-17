import React, { useState } from "react";
import { Button, Card, Container, Grid, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { red, green, blue, grey } from "@mui/material/colors";
import { makeStyles } from "@material-ui/core";
import bg from "../../assets/bg.svg";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import Logo from "../../assets/Logo.png";
import logo1 from "../../assets/logo1.png";
import card from "../../assets/card.png";
import SecondLayer from "./SecondLayer";
import { Link } from "react-router-dom";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import { StylesProvider } from "@material-ui/core/styles";
import "./Home.css"
import Banner from './Banner';
import Cardy from "./Cardy"
import BeforeFooter from "./BeforeFooter";

const CustomButton = styled("Button")((theme) => ({
  color: "#002D50",
  display: "flex",
  justifyContent: "center",
  margin: "30px",
  padding: "0px 10px",
  maxWidth: "400px",
  // backgroundColor:'red',
  display: "flex",
  justifyContent: "center !important",
}));

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundBlendMode: "overlay",
  backgroundImage: `url(${bg}) `,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  objectFit: "cover",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  backgroundColor: grey[800],
  margin: "0 auto",
  marginTop: "3rem",
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem",
    backgroundSize: "cover",
  },
  //   [theme.breakpoints.down("md")]: {
  //     backgroundColor: red[500],
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     backgroundColor: blue[500],
  //   },
  //   [theme.breakpoints.up("lg")]: {
  //     backgroundColor: grey[800],
  //   },
}));

const useStyles = makeStyles((theme) => ({
  one: {
    color: "red",
    fontSize: 14,
    [theme.breakpoints.down("md")]: {
      color: "blue",
      fontSize: 25,
    },
    [theme.breakpoints.down("sm")]: {
      color: "green",
      fontSize: 10,
    },
  },
  down:{
    backgroundColor:'#F3F3F3',
    minHeight: '100vh'

  },
  title: {
    fontFamily: "IBM Plex Serif !important",
    fontSize: "4rem",
    textAlign: "center",
    color: "#ffffff",
    marginTop: 20,
    fontWeight: 900,
  },
  but:{
    color:'red'
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    color: "#002D50",
    marginTop: 20,
    maxWidth: "30%",
    marginBottom: "6rem",
  },
  btnContainer: {
    display: "flex",
    // width: "300px",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      // maxWidth: "350px",
    },
  },
  mode: {
    // backgroundColor: 'red',
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "2rem",
  },
  image: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

export default function Home() {
  const [mode, setmode] = useState("light");

  // const getCardBtn = styled("button")((theme) => ({
  //   backgroundColor: "white",
  //   color: "#002D50",
  //   padding: "5rem",
  //   width: "15rem",
  //   margin:'0 auto'
  // }));

  const classes = useStyles();
  return (
    <>
      <Root>
        <Box>
          <Grid container spacing={2}>
            <Grid xs={12} className={classes.mode}>
              {mode === "light" ? (
                <LightModeOutlinedIcon sx={{ color: "white" }} />
              ) : (
                <LightModeSharpIcon />
              )}
              <Switch></Switch>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Typography variant="h3" className={classes.title}>
                Welcome to Giftshop{" "}
                <sup>
                  <img src={`${logo1}`} loading="lazy" />{" "}
                </sup>{" "}
                <br></br> Africa
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{
              color: "#A6A6A6",
              textAlign: "center",
              fontSize: 16,
              fontFamily: "Noto Sans !important",
            }}
          >
            Africa’s most innovative loyalty solutions provider.
          </Typography>
          

          <Container
            className={classes.btnContainer}
            sx={{ display: "flex", justifyContent: "center",  }}
          >
          
              <CustomButton>
              <Button size=""> Generate a Giftcard</Button>
              </CustomButton>
           
          </Container>

          <Grid container spacing={2}>
            <Grid xs={12}>
              <img src={`${card}`} alt="Card pile" className={classes.image} />
            </Grid>
          </Grid>
          {/* <Typography variant="h2" className={classes.title}>
            One Card redeemable across
            <br></br> all platforms
          </Typography>
          <Typography
            sx={{
              color: "#A6A6A6",
              textAlign: "center",
              fontSize: 16,
              fontFamily: "Noto Sans !important",
              marginBottom: 20,
            }}
          >
            Giftshop Africa helps brands with loyalty program as well as help
            individuals get gift ideas for their loved ones.
          </Typography>
          <Box className={classes.btn}>
            <Button>Generate a Giftcard</Button>
          </Box> */}
<Grid>
<Grid xs={12}>
              <Typography variant="h3" className={classes.title}>
              One card, redeemable across <br></br> all platforms
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{
              color: "#A6A6A6",
              textAlign: "center",
              fontSize: 16,
              fontFamily: "Noto Sans !important",
              display:'flex',


              flexWrap:'wrap',
              position:'relative',
              // width:'30rem',
              justifyContent: 'center'
            }}
          >
            Giftshop Africa helps brands with loyalty program as well as help individuals get gift ideas for their loved ones.
          </Typography>
          

          <Container
            className={classes.btnContainer}
            sx={{ display: "flex", justifyContent: "center",  }}
          >
          
              <CustomButton>
              <Button size=""> Generate a Giftcard</Button>
              </CustomButton>
           
          </Container>
        </Box>
      </Root>
      {/* <SecondLayer/> */}
      <Link to="gift"> Lets go to gift </Link>
      <Link to="store"> Lets go to store </Link>
      <Box className={classes.down}>
            <Banner title="Shop your favourites with custom discounts" p="Shop exclusives with only the best bargains, just for you."  />
      <Cardy/>
      <BeforeFooter/>
      
      </Box >
          
     
    </>
  );
}
