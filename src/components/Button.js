import React from 'react'
import { Button, Container, Grid, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const MyButton = styled('button')((theme)=>{
    width:'0 auto'

})

export default function Button() {
    return (
       <Container>
           <Button>{}</Button>
       </Container>
    )
}
