import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const MainGrid = styled(Grid) `
  max-width: 100vw;
  height: 100vh;
`

export const BodyGrid = styled(Grid) `
  /* background-color: red; */
  max-width: 100%;
  min-height: 90%;
`  

export const FilterProducts = styled.div `

  width: 10%;
  height: 50%;
  background-color: green;

  position: fixed;
  left: 3%;
  top: 20%;
`