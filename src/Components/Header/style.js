import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const GridHeader = styled(Grid) `
  width: 100%;
  height: 18%;
  background-color: black;
`

export const CommunGridOne = styled(Grid) `
  width: 98% !important;  
  height: 70%;
  /* background-color: gold; */
`

export const NavigationDiv = styled(Grid) `
  width: 100% !important;  
  height: 30%;
  /* border: 1px 1px solid rgb(0, 0, 0); */
  box-shadow: 0px 1px 0px black;
  background-color: white;

  div {
    /* background-color: red; */
    width: 20%;
    height: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`

export const CommunDiv = styled.div `
  /* background-color: gainsboro; */
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
`