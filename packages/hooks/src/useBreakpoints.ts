import { useMediaQuery, useTheme } from '@mui/material'

export interface useBreakpointsProps {}

const useBreakpoints = (props: useBreakpointsProps) => {
  const theme = useTheme()
  const upmd = useMediaQuery(theme.breakpoints.up('md'))
  const downmd = useMediaQuery(theme.breakpoints.down('md'))
  const upsm = useMediaQuery(theme.breakpoints.up('sm'))
  const downsm = useMediaQuery(theme.breakpoints.down('sm'))

  return {
    theme,
    upmd,
    downmd,
    downsm,
    upsm,
  }
}

export default useBreakpoints
