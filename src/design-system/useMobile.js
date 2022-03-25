import { useTheme } from '@mui/system'
import { useMediaQuery } from '@mui/material'

export default function useMobileView() {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down('sm'))
}
