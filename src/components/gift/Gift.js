import React from 'react'
import { Container, Link } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

import './gift.css'


const useStyles = makeStyles((theme)=>({
root:{
    minHeight: '100vh',
    backgroundColor: '#FF0000',
    marginTop:'120px',
    color:'#FF0000',
    minWidth:'100vw'
}
}))


function Gift() {
    const classes = useStyles()
    return (
        <div clasName={classes.root}>
            <h1> Gift page is here </h1>
            <Link to="/"> Back to home </Link>
        </div>
    )
}

export default Gift
