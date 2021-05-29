import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const GridHeader = styled(Grid) `
  width: 100%;
  height: 10%;
  /* background-color: blue; */
`

export const CommunGridOne = styled(Grid) `
  width: 98% !important;  
  height: 100%;
  /* background-color: gold; */
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
  color: rgb(0, 0, 0);
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