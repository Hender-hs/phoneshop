import { Header } from '../../Components/Header'
import { MainGrid, BodyGrid } from './style'
import { DisplayCart } from '../../Components/DisplayCart'

export const Cart = () => {

  return (
    <MainGrid>  
      <Header />
      <BodyGrid container justify = 'center' alignItems = 'center' >
        <DisplayCart />
      </BodyGrid>
    </MainGrid>
  )
}