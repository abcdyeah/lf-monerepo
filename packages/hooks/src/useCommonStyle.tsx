import * as React from 'react'
import { Theme } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'

/**
 * @name: useCommonStyles
 * @msg: style class
 * @param {*} makeStyles
 * @return {*}
 */
export const useCommonStyles = makeStyles((theme: Theme) =>
  createStyles({
    center: {
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: theme.breakpoints.values.sm,
      },
      [theme.breakpoints.up('md')]: {
        width: theme.breakpoints.values.md,
      },
      [theme.breakpoints.up('lg')]: {
        width: theme.breakpoints.values.lg,
      },
      [theme.breakpoints.up('xl')]: {
        width: theme.breakpoints.values.lg,
      },
      margin: '0 auto',
    },
  }),
)

export default useCommonStyles
