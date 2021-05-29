import styled from 'styled-components'
import { Grid, Button } from '@material-ui/core'

export const MainGridContainer = styled(Grid) `
  width: 100% !important;
  height: 100% !important;
  /* background-color: gray !important; */
`

export const LeftDiv = styled.div `
  width: 70%;
  height: 100%;
  /* background-color: rebeccapurple; */

  display: flex;
  justify-content: center;
`

export const DivListOfCart = styled.div `
    margin-top: 3%;
    width: 97%;
    height: 80%;
    /* background-color: gray; */

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const RightDiv = styled.div `
  width: 30%;
  height: 100%;
  /* background-color: royalblue; */

  display: flex;
  justify-content: center;
`

export const DivTotal = styled.div `
    margin-top: 3%;
    width: 97%;
    height: 80%;
    /* background-color: rosybrown; */

    display: flex;
    justify-content: center;
`

export const EachProductDiv = styled(Grid) `
  width: 90% !important;
  max-height: 20% !important;

  padding: 2%;
  border-radius: 10px;
  margin: 0.5% 0 !important;
  /* background-color: green !important; */

  .ImgDiv {
    width: 10%;
    height: 100%;
  }

  img {
    height: 100%;
  }
  p {
    /* background-color: wheat; */
    width: 45%;
    text-align: center;
  }
  span {
    width: 5%;
    text-align: end;
    /* background-color: wheat; */
  }

`

export const RemoveToCartButton = styled.button `
  /* text-transform: unset !important; */
  width: 8%;
  height: 30%;
  border: 0.5px solid rgb(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: rgb(255, 255, 255, 0);
  cursor: pointer;
  font-weight: lighter;
`

export const DivQuantity = styled.div `
  width: 5%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 55%;
    height: 40%;
    border: solid 0.5px rgb(155, 155, 155, 0.9);
    border-radius: 10px;
    background-color: rgb(155, 155, 155, 0);
    cursor: pointer;
    /* margin: 2% 0; */
  }

  .second {
    transform: rotateZ(180deg);
  }

  input {
    width: 58%;
    border: 1px solid rgb(0, 0, 0, 0);
    text-align: center;
  }
`