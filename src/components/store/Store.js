import { Typography } from '@mui/material'
import { Flex } from 'design-system'
import React from 'react'


export default function Store() {
    return (
        <Flex sx={{minHeight:'90vh', justifyContent:'center',p:4}}>
            <Typography variant='h2'> Store Page</Typography>
        </Flex>
     )
}
