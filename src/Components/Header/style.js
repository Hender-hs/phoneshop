import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { styled as materialStyled } from '@material-ui/core/styles'

export const GridHeader = materialStyled(Grid) ({
  width: '100%',
  height: '18%',
  backgroundColor: 'black',
  position: 'fixed',
  zIndex: '1',
})

export const CommunGridOne = materialStyled(Grid) ({
  width: '98%',  
  height: '70%',
})

export const NavigationDiv = materialStyled(Grid) ({
  width: '100%',
  height: '30%',
  boxShadow: '0px 1px 0px black',
  backgroundColor: 'white',
})

export const NavDiv = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media(min-width: 600px) {
    justify-content: unset;
    width: 20%;
  }

`

export const CommunDiv = styled.div `
  width: 25%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Div = styled.div `
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 110%;
  font-weight: 600;
  font-style: oblique;
`

export const H1 = styled.h1 `
  cursor: pointer;
  font-size: 140%;
  font-weight: 800;
  color: white;
`

export const Svg = styled.svg `
  width: 50px;
  height: 70px;
  position: relative;
  bottom: 0%;
  left: -40%;

  text {
    font: 100 50% Verdana, Helvetica, Arial, sans-serif;
    color: white;
  }
`

export const StyledLink = styled(Link) `
  color: black;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media(min-width: 600px) {
    width: auto;
    margin-left: 8%;
  }
`