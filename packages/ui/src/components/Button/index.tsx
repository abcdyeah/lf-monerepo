import React from 'react'
import { BoxProps, Button, ButtonProps } from '@mui/material'

import { Container } from './style'

export interface IndexProps extends ButtonProps {
  /**
   * @name: containerProps
   * @msg: container box props to write styles
   * @return {*}
   */
  containerProps?: BoxProps
}

const Index: React.FC<IndexProps> = ({ containerProps, ...props }) => {
  return (
    <Container {...containerProps} className={` ${containerProps?.className}`}>
      <Button {...props} />
    </Container>
  )
}

export default Index
