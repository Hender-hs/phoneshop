import { Grid } from '@material-ui/core'
import { styled as materialStyled } from '@material-ui/core/styles'

export const MainGrid = materialStyled(Grid) ({
  maxWidth: '100vw',
  height: '100vh',
})

export const BodyGrid = materialStyled(Grid) ({
  maxWidth: '100%',
  height: '90%',
})  