import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { styled as materialStyled } from '@material-ui/core/styles'

export const MainGridContainer = materialStyled(Grid) ( ({ theme }) => ({
  width: '100%',
  margin: '8rem 0',
  display: 'flex',
  flexDirection: 'column-reverse',

  [theme.breakpoints.up('sm')]: {
    width: '100%',
    height: '95%',
    margin: '15rem 0',  
  }
}))

export const LeftDiv = styled.div `
  width: 98%;
  height: 100%;

  display: flex;
  justify-content: space-evenly;

  @media(min-width: 600px) {
    width: 70%;
    /* display: flex; */
    justify-content: center;
  }
`

export const DivListOfCart = styled.div `
    margin-top: 5%;
    width: 97%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media(min-width: 600px) {
      margin-top: 3%;
      width: 97%;
      height: 80%;
      justify-content: flex-start;
    }
`

export const RightDiv = styled.div `
  width: 100%;

  display: flex;
  justify-content: center;

  @media(min-width: 600px) {
    height: 100%;
    width: 30%;
  }
`

export const DivTotal = styled.div `
    margin-top: 3%;
    width: 97%;
    height: 80%;

    display: flex;
    justify-content: center;
`

export const EachProductDiv = materialStyled(Grid) ( ({ theme }) => ({

  width: '100%',
  height: '20%',
  padding: '2%',
  borderRadius: '10px',
  margin: '0.5% 0',

  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',

  [theme.breakpoints.up('sm')]: {
    width: '90%',
    maxHeight: '20%',
  }
}))

export const ImgDiv = styled.div `
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media(min-width: 600px) {
  }
`
export const Img = styled.img `
  width: 100%;

  @media(min-width: 600px) {
    width: auto;
    height: 100%;
  }
`
export const P = styled.p `
  width: 20%;
  text-align: center;
  font-size: 65%;
  
  @media(min-width: 600px) {
    width: 45%;
    font-size: unset;
  }
`
export const Span = styled.span `
  width: 5%;
  text-align: end;
  font-size: 55%;
  font-weight: 700;

  @media(min-width: 600px) {
    width: 5%;
    font-size: unset;
    font-weight: 100;
  }
`

export const RemoveToCartButton = styled.button `
  width: 20%;
  height: 60%;
  border: 0.5px solid rgb(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: rgb(255, 255, 255, 0);
  cursor: pointer;
  font-weight: bold;
  font-size: 60%;

  @media(min-width: 600px) {
    width: 8%;
    height: 30%;
    font-weight: lighter;
    font-size: 1%;
    font-size: unset;
  }
`

export const DivQuantity = styled.div `
  width: 10%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 85%;
    height: 40%;
    border: solid 0.5px rgb(155, 155, 155, 0.9);
    border-radius: 10px;
    background-color: rgb(155, 155, 155, 0);
    cursor: pointer;
  }

  .second {
    transform: rotateZ(180deg);
  }

  input {
    width: 25%;
    height: 40%;
    border: 1px solid rgb(0, 0, 0, 0);
    text-align: center;
  }

  @media(min-width: 600px) {
    width: 5%;
    height: 50%;

    button {
      width: 55%;
      height: 40%;
    }

    input {
      width: 58%;
      height: auto;
    }
  }
`