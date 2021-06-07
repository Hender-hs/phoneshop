import styled from 'styled-components'
import { Grid, Button } from '@material-ui/core'
import { styled as materialStyled } from '@material-ui/core/styles'

export const ProductsGrid = materialStyled(Grid)( ({ theme }) => ({
  width: '90%',
  minHeight: '80%',
  transition: '1,5s',
  margin: '12rem 0',

  display: 'flex',
  flexWrap: 'wrap',
  
  [theme.breakpoints.up('sm')]: {
    width: '70%',
    minHeight: '80%',
  }
}))
export const Div = styled.div `
  width: 33vw;
  height: 30vh;
  background-color: white;
  margin: -15% 2% 20% 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;

  img {
    height: 25% !important;
  }

  p {
    height: 20% !important;
    text-align: center;
    font-size: 60%;
  }

  span {
    height: 10% !important;
    text-align: center;
    font-size: 60%;
  }

  @media(min-width: 600px) {

    width: 13vw;
    height: 30vh;
    margin: 5% 2% 1% 0;

    img {
    height: 40% !important;
    }

    p {
      height: 20% !important;
    }

    span {
      height: 10% !important;
    }
  }
`

export const FirstWhiteButton = materialStyled(Button)( ({ theme }) => ({
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  width: '80%',
  height: '15%',
  textTransform: 'unset',
}))


export const SecondBlackButton = materialStyled(Button) ({
  backgroundColor: 'green',
  width: '80%',
  height: '15%',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  textTransform: 'unset',
  '&:hover': {
    backgroundColor: 'rgb(0, 110, 0)',
  }
}) 