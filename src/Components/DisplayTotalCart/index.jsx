import { DivTotal, FirstDiv, SecondDiv, H2, StyledButton, ProductSubTotalListDiv, P1, P2, P3, ModalDiv, ModalPaper, ModalTypography } from './style'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export const DisplayTotalCart = () => {

  const [openModal, setOpenModal] = useState(false)

  const { Cart } = useSelector((store) => store)

  let totalCartPrice = 0

  Cart.length !== 0 && Cart.forEach( (cartElement, i) => {
    totalCartPrice += cartElement.price * cartElement.quantity
  })

  const showListOfCartInTheLeftSide = (el, i) => {

    return (
      <ProductSubTotalListDiv>
        <P1> {el.quantity} {el.quantity > 1 ? 'produtos' : 'produto'} </P1>
        <P2>R$</P2>
        <P3>{el.price}</P3>
      </ProductSubTotalListDiv>
    )
  }

  const hadleModal = () => {
    setOpenModal(true)
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
      <StyledButton onClick={hadleModal} variant = 'contained' color = 'primary' >Finalizar Pedidos</StyledButton>
      {
        openModal
        &&
        <ModalDiv onClick={() => setOpenModal(false)} >
          <ModalPaper >
            <ModalTypography variant='h3' >Compra Finalizada com Sucesso!</ModalTypography>
          </ModalPaper>
        </ModalDiv>
      }
    </DivTotal>
  )
}