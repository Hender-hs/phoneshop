import styled from 'styled-components'
import { Grid, TextField } from '@material-ui/core'
import { styled as materialStyled } from '@material-ui/core/styles'

export const MainGrid = materialStyled(Grid) ({
  maxWidth: '100vw',
  height: '100vh',
})

export const BodyGrid = materialStyled(Grid) ({
  maxWidth: '100%',
  minHeight: '90%',
})  

export const FilterProducts = styled.div `
    visibility: hidden;

    width: 10%;
    height: 30%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    position: fixed;
    left: 3%;
    top: 35%;
  @media(min-width: 600px) {
    visibility: visible;
  }
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

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`

export const StyledTextField = materialStyled(TextField) ({

  '&::placeholder': {
    fontSize: '560%',
  }
})

export const DivSearch = styled.div `
  width: 90%;

  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    margin-right: 5%;
  }
`