import { Header } from '../../Components/Header'
import { DisplayProducts } from '../../Components/DisplayProducts'
import { MainGrid, BodyGrid, FilterProducts, CheckboxDivs, Div, DivSearch, StyledTextField } from './style'
import { Checkbox } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export const Home = () => {

  const { Products } = useSelector(store => store)

  const [filteredProducts, setFilteredProducts] = useState(Products)

  const [filterApple, setFilterApple] = useState(false)

  const [filterMotorola, setFilterMotorola] = useState(false)

  const [filterLg, setFilterLg] = useState(false)

  const [filterSamsung, setFilterSamsung] = useState(false)


  const toFilterProducts = (param) => Products.filter( (el) => el.name.toLowerCase().includes(param.toLowerCase()) )

  useEffect(() => {
    filterApple     && setFilteredProducts(toFilterProducts('apple'))   
  }, [filterApple])

  useEffect(() => {
    filterMotorola  && setFilteredProducts(toFilterProducts('motorola'))
  }, [filterMotorola])

  useEffect(() => {
    filterLg        && setFilteredProducts(toFilterProducts('lg'))      
  }, [filterLg])

  useEffect(() => {
    filterSamsung   && setFilteredProducts(toFilterProducts('samsung')) 
  }, [filterSamsung])

  useEffect(() => {
    if (!filterApple && !filterMotorola && !filterLg && !filterSamsung) setFilteredProducts(Products)
  }, [filterApple, filterMotorola, filterLg, filterSamsung])

  const hadleTextFiled = (inputValue) => {
    setFilteredProducts(toFilterProducts(inputValue.target.value))
  }

  return (
    <MainGrid>  
      <Header />
      <BodyGrid container justify = 'center' alignItems = 'center' >
        <FilterProducts>
            <DivSearch>
              <SearchIcon color='action' className='icon' />
              <StyledTextField placeholder='Procurar' size='small' onChange={input => hadleTextFiled(input) } />
            </DivSearch>
          <CheckboxDivs>

            <Div>
              <Checkbox size='small' onChange={input => setFilterApple(input.target.checked) } />
              <h5>Apple</h5>
            </Div>

            <Div>
              <Checkbox size='small' onChange={input => setFilterMotorola(input.target.checked) } />
              <h5>Motorola</h5>
            </Div>

            <Div>
              <Checkbox size='small' onChange={input => setFilterLg(input.target.checked) } />
              <h5>LG</h5>
            </Div>

            <Div>
              <Checkbox size='small' onChange={input => setFilterSamsung(input.target.checked) } />
              <h5>Samsung</h5>
            </Div>
          </CheckboxDivs>
        </FilterProducts>

        <DisplayProducts filteredProducts={filteredProducts} />
        
      </BodyGrid>
    </MainGrid>
  )
}