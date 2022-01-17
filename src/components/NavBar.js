import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import appbarbg from "../assets/appbarbg.png";
import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Badge from '@mui/material/Badge';
import { blue, red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { blueGrey } from "material-ui-colors";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";



const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    color: '#fff',
    display: 'flex',
    
   
  },
  left: {
    width: '50vw',
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
    
    
   
  },
  right: {
    width: '50vw',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]:{
      justifyContent: 'space-around',
      width:'100vw'
    }
  },
  items:{
    display:'flex',
    justifyContent: 'flex-end',
    marginLeft: '20px',
    fontSize: '1rem',
    fontFamily: 'Noto Sans',

    
  },
  item:{
  // marginLeft:'10px !importance'
  [theme.breakpoints.down('sm')]:{
    fontSize: '0.3rem'
  },
  '&:hover': {
    color:'red',
  },
  '&::active': {
    color:'red'
  }

  },

}));

const Links = styled('Link')({
color: 'white',

})

const NavBar = () => {
  const classes = useStyles();
const [menuOpen, setMenuOpen] = useState(false);
const handleClick = (menuOpen)=>{
  setMenuOpen(!menuOpen)}

menuOpen? console.log('Menu is Open'): console.log("menu closed now");

  return (
    <Container>
      <AppBar
        position="fixed"
        color="transparent"
        style={{ backgroundImage: `url(${appbarbg})`, width: "100%" }}
      >
       {/* <Container */}
       <Box className={classes.main}>
       <Box className={classes.left} >
          <Toolbar className={classes.items}>
          <Link color="#fff" to="/" > <Box sx={{ml:'2rem'}}><Typography variant="h6" className={classes.item}>Home</Typography> </Box></Link>
          <Link to="/gift"> <Box sx={{ml:'2rem'}}><Typography variant="h6" className={classes.item}>Coporate Gifts</Typography> </Box></Link>
          <Link to="/store"><Box sx={{ml:'2rem'}}> <Typography variant="h6" className={classes.item}>Store</Typography> </Box></Link>
          <Link to="/redeem"> <Box sx={{ml:'2rem'}}><Typography variant="h6" className={classes.item}>Redeem</Typography> </Box></Link>
          </Toolbar>
        </Box>
        <Box className={classes.right}>
          <Toolbar>
            <Box sx={{ml:'2rem'}}>  <AccountCircleIcon /></Box>
            <Box sx={{ml:'2rem'}}>  <Badge badgeContent={4} color="error">
      <ShoppingBagOutlinedIcon  />
    </Badge> </Box>
            
           <Box sx={{ml:'3rem'}}>  <MenuOutlinedIcon onClick={console.log("Click me")}/> </Box>
            
          </Toolbar>
        </Box>
       
         </Box> 
       {/* </Container> */}
       
      </AppBar>
    </Container>
  );
};

export default NavBar;
