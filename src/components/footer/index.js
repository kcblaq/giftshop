import { makeStyles } from '@material-ui/core';
import { Typography } from '@mui/material'
import React from 'react'
import { Flex } from '../../design-system'


const useStyles = makeStyles((theme) => ({
  footer: {
    
    [theme.breakpoints.up('md')]:{
    backgroundColor:'#002D50'
    },
    [theme.breakpoints.down('sm')]:{
      backgroundColor: '#00192C'
      }
  }
}));

export default function Footer() {
  let classes = useStyles()
  return (
    <>
    <Flex className={classes.footer} sx={{minHeight:70, alignItems:'center',buttom:0, justifyContent:'center'}}>
      <Typography color='primary.def' > ©2021 Giftshop Africa. All rights reserved</Typography>
    </Flex>

    </>
  )
}
