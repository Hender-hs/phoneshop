import { ProductsGrid, Div, RedButton, GreenButton } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { AddProductToCartThunk } from '../../Store/modules/Cart/thunk'

export const DisplayProducts = () => {

  const { Products, Cart } = useSelector( (store) => store )
  const dispatch = useDispatch()

  const printProducts = (el, i) => {
    // debugger
    const alreadyHas = Cart.some((cartSomeElement) => {
      return el.name === cartSomeElement.name
    })

    console.log(alreadyHas)

    return (

      <Div justify = 'center' alignItems = 'center' >
        <img src = {el.image} alt = {i} />
        <p>{el.name}</p>
        <span>{el.price}</span>
        { 
          !alreadyHas 
          ?
          (
            <RedButton 
            onClick={() => dispatch(AddProductToCartThunk(el))} 
            variant='contained' color='secondary' 
            > Adicionar ao Carrinho
            </RedButton> 
          ) : (
            <GreenButton 
            onClick={() => dispatch(AddProductToCartThunk(el))} 
            variant='contained' color='secondary' 
            > Adicionar mais um
            </GreenButton>
          )
        }
      </Div>
    )
  }

  return (
    <ProductsGrid container justify = 'space-evenly' alignItems = 'center' wrap = 'wrap' >

        { Products && Products.map(printProducts) }

    </ProductsGrid>
  )
}