import styled from 'styled-components'
import { Grid, Button } from '@material-ui/core'

export const ProductsGrid = styled(Grid) `
  width: 70% !important;
  min-height: 80%;
  /* background-color: green; */
  transition: 1.5s !important;
`

export const Div = styled.div `
  width: 13vw;
  height: 30vh;
  margin: 5% 2% 1% 0;
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

export const FirstWhiteButton = styled.button `
  text-transform: unset !important;
  border: 1px solid rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: white;
  width: 80%;
  height: 15%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  cursor: pointer;
`

export const SecondBlackButton = styled.button `
  text-transform: unset !important;
  border: 1px solid rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: black;
  color: white;
  width: 80%;
  height: 15%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  cursor: pointer;
`