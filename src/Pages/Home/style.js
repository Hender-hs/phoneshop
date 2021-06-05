import styled from 'styled-components'
import { Grid, TextField } from '@material-ui/core'

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
  height: 30%;
  /* background-color: green; */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: fixed;
  left: 3%;
  top: 35%;
`

export const Div = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    font-size: medium;
    text-align: end;
    color: rgb(0, 0, 0, 0.9);
    font-weight: 300;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export const CheckboxDivs = styled.div `

  width: 60%;
  min-height: 40%;
  /* background-color: red; */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`

export const StyledTextField = styled(TextField) `

  &::placeholder {
    font-size: 560% !important;
  }
`

export const DivSearch = styled.div `
  width: 90%;

  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    margin-right: 5%;
  }
`