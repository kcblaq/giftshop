import React from "react";
import { Box, Card, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import bgcard from "../../assets/bgcard.png";
import bgcard1 from "../../assets/bgcard1.png";
import bgcard2 from "../../assets/bgcard2.png";
import bgcard3 from "../../assets/bgcard3.png";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Flex } from "design-system";



const useStyles = makeStyles(theme =>({
    text:{
        color:'#101010',
        fontFamily:'Noto Sans',
        fontWeight:400
    },
    price:{
        color:'#101010',
        fontWeight:800,
        fontFamily:'Noto Sans',

    },
    cards:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}))
const data = [
  { bg: bgcard, text: "Antedote | Vanity Fair Double Choc.", price: "$126.99" },
  { bg: bgcard1, text: "Gitti’s Dish | Four-in-one platter", price: "$126.99" },
  {
    bg: bgcard2,
    text: "Temi the Gallery | Winter Collection",
    price: "$126.99",
  },
  { bg: bgcard3, text: "Alaso |  Stranger in the street", price: "$126.99" },
];

const Hearty = styled('div')((theme) =>({
height:'50px',
width:'50px',
border:'2px solid #fff',
display:'flex',
justifyContent:'center',
alignItems:'center',
borderRadius:'5px'
}))

export default function CardComponent() {
    const classes = useStyles();
  return (
<Flex sx={{flexDirection:'row', overflow:'scroll', width:'100%',  backgroundColor:'#F3F3F3'}}>
    {data.map(function(item){
        return (

       
        
        <Box key={item.bg} sx={{ padding: 4, mt: 6 }}>
      <Card
        sx={{
            backgroundImage: `url(${item.bg})`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            pt: "300px",
            pb: '15px',
            px:'15px',
            minWidth: 250
            
        }}
        >
        <Typography sx={{backgroundColor:"#ffffff",border:'1px solid #fff', padding:'15px', borderRadius:'5px'}} >Buy</Typography>
        <Hearty >
            <FavoriteOutlinedIcon sx={{color:'#fff'}}/>
        </Hearty >
      </Card>
      
      <Typography className={classes.text} sx={{mt:3}} >{item.text} </Typography>
      <Typography className={classes.price} sx={{mt:2}} >{item.price} </Typography>
    </Box>
    
    )})} 
</Flex>

    
  );
}