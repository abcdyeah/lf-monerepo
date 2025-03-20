import React, { FC, useState } from 'react'
import { CircularProgress, BackdropProps } from '@mui/material'
import { useInterval, useUpdateEffect, useCounter } from 'ahooks'

import { BackdropContent } from './style'

export interface IndexProps {
  /**
   * @name: containerProps
   * @msg: container box props to write styles
   * @return {*}
   */
  containerProps?: BackdropProps
  /**
   * @name: isLoading
   * @msg: is loading now?
   * @return {*}
   */
  isLoading?: boolean
  /**
   * @name: auto
   * @msg:
   * @return {*}
   */
  auto?: boolean
}

const LoadingScreen: FC<IndexProps> = ({ isLoading, auto, containerProps }) => {
  /**
   * @name state
   */
  const [state, setState] = useState<boolean>(false)

  /**
   * @name interval
   */
  const [interval, setInterval] = useState<number | undefined>(undefined)

  /**
   * @name current
   * @msg inc:Increment, useCounter for managing counter.
   */
  const [current, { inc, reset }] = useCounter(1, { min: 1, max: 3 })

  /**
   * @name inc
   * @msg interval: time, function inc for action
   */
  useInterval(() => {
    inc()
  }, interval)

  /**
   * @name useUpdateEffect
   * @msg set time for interval
   */
  useUpdateEffect(() => {
    state && setInterval(1000)
  }, [state])

  useUpdateEffect(() => {
    isLoading && setState(isLoading)
  }, [isLoading])

  useUpdateEffect(() => {
    if (current !== 3) return
    if (!isLoading || auto) {
      setState(false)
      reset()
    }
  }, [isLoading, current])

  useUpdateEffect(() => {
    current === 3 && setInterval(undefined)
  }, [current])

  return (
    <BackdropContent open={state} {...containerProps}>
      <CircularProgress color="info" size={60} />
    </BackdropContent>
  )
}

export default LoadingScreen
