import React from 'react'
import { Box, Button, Card, Container, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme)=> ({
root:{
    maxWidth: '50vw',
    margin: '0 auto',
    display:'flex',
    // justifyContent:'flex-start',
    flexDirection:'column',
    alignItems:'center',
    [theme.breakpoints.down('sm')]:{
        maxWidth:'90vw'
    }
},
title:{
    textAlign:'center',
    fontFamily:'IBM Plex Serif',
    color: '#002D50',
    fontWeight:'bold',
    lineHeight:'4rem',
    fontSize:'4rem',
    [theme.breakpoints.down('md')]:{
        textAlign:'center',
        fontSize:'1rem',
        
    }
},
para:{
    fontFamily:'Noto Sans',
    color:'#002D50',
    textAlign:'center'
}
}))
const detail =[
    {h1:'Shop your favourites with custom discounts'}

]
function Banner({title, p,btn}) {
    const classes = useStyles()

    return (
       <Container>
           <Box className={classes.root}>
           <Box sx={{mt:{md:16,sm:2,xs:2}}}>
               <Typography variant="h3" className={classes.title}> {title} </Typography>
           </Box>
           <Box sx={{mt:1}}>
               <Typography className={classes.para}> {p}</Typography>
           </Box>
           <Box sx={{mt:5}}> 
            <Button variant="contained" size="large" sx={{backgroundColor:'#002D50'}}>Explore Giftshop</Button> 
               {btn}
           </Box>
       </Box>
       </Container>

    )
}

export default Banner
