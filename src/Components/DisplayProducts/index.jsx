import { ProductsGrid, Div, FirstWhiteButton, SecondBlackButton } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { AddProductToCartThunk } from '../../Store/modules/Cart/thunk'

export const DisplayProducts = ({ filteredProducts }) => {

  const { Cart } = useSelector( (store) => store )
  const dispatch = useDispatch()

  const printProducts = (el, i) => {

    const alreadyHas = Cart.some((cartSomeElement) => {
      return el.name === cartSomeElement.name
    })

    console.log(alreadyHas)

    return (

      <Div>
        <img src = {el.image} alt = {i} />
        <p>{el.name}</p>
        <span>{el.price}</span>
        { 
          !alreadyHas 
          ?
          (
            <FirstWhiteButton 
            onClick={() => dispatch(AddProductToCartThunk(el))} 
            variant='contained' color='secondary' 
            > Adicionar ao Carrinho
            </FirstWhiteButton> 
          ) : (
            <SecondBlackButton 
            onClick={() => dispatch(AddProductToCartThunk(el))} 
            variant='contained' color='secondary' 
            > Adicionar mais um
            </SecondBlackButton>
          )
        }
      </Div>
    )
  }

  return (
    <ProductsGrid container justify = 'space-evenly' alignItems = 'center' wrap = 'wrap' >

        { filteredProducts && filteredProducts.map(printProducts) }

    </ProductsGrid>
  )
}