import styled from 'styled-components'
import { Button, Modal, Paper, Typography } from '@material-ui/core'
import { styled as materialStyled } from '@material-ui/core/styles'

export const DivTotal = styled.div `
  width: 80%;
  min-height: 50%;
  min-height: 50%;
  margin-top: 3%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FirstDiv = styled.div `
  width: 80%;
  min-height: 25%;
  margin: 8% 0 2.5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SecondDiv = styled.div `
  width: 80%;
  height: 11%;
  margin-top: 4%;
  display: flex;
  justify-content: space-between;

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

export const StyledButton = materialStyled(Button)({

  textTransform: 'unset',
  marginTop: '5%',
  '&:hover': {
  }
})

export const StyledButtonToHome = materialStyled(Button)({
  textTransform: 'unset',
  marginTop: '5%',
  backgroundColor: 'green',
  '&:hover': {
    backgroundColor: 'green',
  }
})

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

export const ButtonsDiv = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const ModalPaper = materialStyled(Paper) ({
  width: '50%',
  height: '40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ModalTypography = styled(Typography) ({
  color: 'black',
  textAlign: 'center',
})

export const StyledModal = styled(Modal) ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

})