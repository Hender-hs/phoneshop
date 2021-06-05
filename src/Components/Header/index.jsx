import { GridHeader, CommunGridOne, CommunDiv, Div, H1, Svg, NavigationDiv, StyledLink } from './style'
import { useHistory } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { useSelector } from 'react-redux'

export const Header = () => {

  const history = useHistory()

  const { Cart } = useSelector( (store) => store )

  const handleClickCart = () => history.push('/cart')
  const handleClickHome = () => history.push('/')

  let cartTotalQuantity = 0
  Cart.forEach( (el) => {
    cartTotalQuantity += el.quantity
   })

  return (
    <GridHeader container justify = 'flex-end' alignItems = 'center' >
      <CommunGridOne container justify = 'space-between' alignItems = 'center' >
        <H1 onClick={handleClickHome} >PhoneShop</H1>
        <CommunDiv>
          <Div onClick={handleClickCart} >
            <ShoppingCartOutlinedIcon fontSize='large' style={{color: 'white'}} >
            </ShoppingCartOutlinedIcon> 
            <Svg>
            {Cart.length > 0 &&
              <>
                <circle cx="25" cy="25" r="10" fill="red" />
                <text y="28" x="23" textRendering="geometricPrecision" >{cartTotalQuantity}</text> 
              </>
            }
              </Svg>
            
          </Div>
          {/* <Div>Entrar</Div> */}
        </CommunDiv>
      </CommunGridOne>
      <NavigationDiv>
        <div>
          <StyledLink to='/' >Home</StyledLink>
          <StyledLink to='/' >Smartphones</StyledLink>
          <StyledLink to='/' >Notebooks</StyledLink>
        </div>
      </NavigationDiv>
    </GridHeader>
  )
}