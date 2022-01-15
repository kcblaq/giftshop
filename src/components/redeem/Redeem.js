import React from 'react'
import { Container, Link } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme)=>({
root:{
    minHeight: '100vh',
    backgroundColor: 'red',
    marginTop:'120px'
}
}))


function Redeem() {
    const classes = useStyles()
    return (
        <div clasName={classes.root}>
            <h1> We redeem the page here </h1>
            <Link to="/"> Back to home </Link>
        </div>
    )
}

export default Redeem
