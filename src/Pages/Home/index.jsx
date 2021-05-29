import { Header } from '../../Components/Header'
import { DisplayProducts } from '../../Components/DisplayProducts'
import { MainGrid, BodyGrid, FilterProducts } from './style'

export const Home = () => {

  return (
    <MainGrid>  
      <Header />
      <BodyGrid container justify = 'center' alignItems = 'center' >
        {/* <FilterProducts> */}
        {/* </FilterProducts> */}
        <DisplayProducts />
      </BodyGrid>
    </MainGrid>
  )
}