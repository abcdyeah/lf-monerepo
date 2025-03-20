import { Box, styled, Theme, Backdrop } from '@mui/material'

export const Container = styled(Box)(({ theme }: { theme: Theme }) => ({}))

export const BackdropContent = styled(Backdrop)(
  ({ theme }: { theme: Theme }) => ({
    color: '#fff',
    zIndex: 9999,
  }),
)
