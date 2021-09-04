import { DivTotal, FirstDiv, SecondDiv, H2, StyledButton, ProductSubTotalListDiv, P1, P2, P3 } from './style'
import { ModalPaper, ModalTypography, ButtonsDiv, StyledButtonToHome, StyledModal } from './style'
import { Fade } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useHistory } from 'react-router'

export const DisplayTotalCart = () => {

  const history = useHistory()

  const [openModal, setOpenModal] = useState(false)

  const { Cart } = useSelector((store) => store)

  let totalCartPrice = 0

  Cart.length !== 0 && Cart.forEach( (cartElement, i) => {
    totalCartPrice += cartElement.price * cartElement.quantity
  })

  const showListOfCartInTheLeftSide = (el, i) => {

    return (
      <ProductSubTotalListDiv key ={i} >
        <P1> {el.quantity} {el.quantity > 1 ? 'produtos' : 'produto'} </P1>
        <P2>R$</P2>
        <P3>{el.price}</P3>
      </ProductSubTotalListDiv>
    )
  }

  const hadleModal = () => {
    setOpenModal(!openModal)
  }

  const redirectToHome = () => {
    history.push('/')
  }

  return (
    <DivTotal>
      <H2> Resumo dos Pedidos </H2>
      <FirstDiv>
        { Cart.length !== 0 && Cart.map(showListOfCartInTheLeftSide) }
      </FirstDiv>
      <SecondDiv>
        <p>Total</p>
        <p>R${totalCartPrice}</p>
      </SecondDiv>
      <ButtonsDiv>
        <StyledButtonToHome onClick={redirectToHome} variant = 'contained' color = 'primary' >Voltar a Comprar</StyledButtonToHome>
        <StyledButton onClick={hadleModal} variant = 'contained' color = 'secondary' >Finalizar Pedidos</StyledButton>
      </ButtonsDiv>
      <StyledModal open={openModal} onClose={hadleModal} >
        <Fade in={openModal} >
          <ModalPaper >
            <ModalTypography variant='h3' >Compra Finalizada com Sucesso!</ModalTypography>
          </ModalPaper>
        </Fade>
      </StyledModal>
    </DivTotal>
  )
}