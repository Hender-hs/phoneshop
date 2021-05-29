import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const DivTotal = styled.div `
  width: 80%;
  min-height: 50%;
  min-height: 50%;
  /* height: 50%; */
  /* background-color: gray; */
  margin-top: 3%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FirstDiv = styled.div `
  width: 80%;
  min-height: 25%;
  /* height: 25%; */
  /* background-color: salmon; */
  margin: 8% 0 2.5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SecondDiv = styled.div `
  width: 80%;
  height: 11%;
  /* background-color: saddlebrown; */
  margin-top: 4%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  p {
    color: rgb(0, 0, 0, 0.9);
    font-weight: 300;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export const Hr = styled.hr `
  width: 80%;
  border: 0;
  height: 1px;
  background-color: rgb(0, 0, 0, 0.4);
`

export const H2 = styled.h2 `
  margin-top: 2%;
  font-size: 130%;
  font-family: SF Pro Display,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 500;
`

export const StyledButton = styled(Button) `
  text-transform: unset !important;
  margin-top: 5% !important;
`

export const ProductSubTotalListDiv = styled.div `
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin: 2% 0;
`

export const P1 = styled.p `
  width: 70%;
  color: rgb(0, 0, 0, 0.9);
  font-weight: 300;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const P2 = styled.p `
  width: 10%;
  color: rgb(0, 0, 0, 0.9);
  font-weight: 300;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const P3 = styled.p `
  width: 20%;
  text-align: end;
  color: rgb(0, 0, 0, 0.9);
  font-weight: 300;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`