import styled from 'styled-components'
import { Grid, Button } from '@material-ui/core'

export const ProductsGrid = styled(Grid) `
  width: 70% !important;
  min-height: 80%;
  /* background-color: green; */
`

export const Div = styled.div `
  width: 13vw;
  height: 30vh;
  margin: 2% 0;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 15px;

  img {
    height: 40% !important;
    /* background-color: bisque; */
  }

  p {
    height: 20% !important;
    text-align: center;
    /* background-color: blanchedalmond; */
  }

  span {
    height: 10% !important;
    text-align: center;
    /* background-color: indianred; */
  }

`

export const RedButton = styled(Button) `
  text-transform: unset !important;
`

export const GreenButton = styled(Button) `
  text-transform: unset !important;
  background-color: green !important;
`