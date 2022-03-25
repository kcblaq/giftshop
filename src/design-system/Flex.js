import { Box, styled } from '@mui/material'

export const Flex = styled(Box)((fullWidth) => ({
  display: 'flex',
  ...(fullWidth ? { width: '100%' } : {}),
}))
