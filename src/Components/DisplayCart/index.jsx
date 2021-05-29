import { MainGridContainer, LeftDiv, RightDiv, EachProductDiv, DivListOfCart, DivTotal, RemoveToCartButton, DivQuantity } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { AddProductToCartThunk, RemoveProductToCartThunk, RemoveAllTheSameProductThunk } from '../../Store/modules/Cart/thunk'
import { DisplayTotalCart } from '../DisplayTotalCart'

export const DisplayCart = () => {

  const { Cart } = useSelector((store) => store)

  const dispatch = useDispatch()

  const printCartProducts = (el, i) => (
    <EachProductDiv container justify = 'space-between' alignItems = 'center' >
      <div className='ImgDiv'>
        <img src = {el.image} alt = {i} />
      </div>
      <p>{el.name}</p>
      <DivQuantity>
        <button onClick = { () => dispatch(AddProductToCartThunk(el)) } >^</button>
        <input value = {el.quantity} ></input>
        <button className = 'second' onClick = { () => dispatch(RemoveProductToCartThunk(el)) } >^</button>
      </DivQuantity>
      <span>{el.price}</span>
      <RemoveToCartButton onClick={() => dispatch(RemoveAllTheSameProductThunk(el)) } variant = 'contained' size = 'small' >remover</RemoveToCartButton>
    </EachProductDiv>
  )

  return (
    <MainGridContainer container justify = 'space-evenly' alignItems = 'center' >
      
      <LeftDiv>
        <DivListOfCart>
          { Cart && Cart.map(printCartProducts) }
        </DivListOfCart>  
      </LeftDiv>
      <RightDiv>
        <DivTotal>
          <DisplayTotalCart />
        </DivTotal>
      </RightDiv>

    </MainGridContainer>
  )
}