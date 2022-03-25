import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
  btn:{
    height:55,
    '&:hover':{
      backgroundColor:'gray',
      color:'primary.main'
    }
  }
})

export default function MyButton(props) {
  const {bg,color,width, text} = props
  const classes = useStyles()


  return (
    <Button className={classes.btn} sx={{width:width, borderRadius:2,backgroundColor:bg,color:color, textTransform:'none'}}  >
        {text}
    </Button>
  )
}
