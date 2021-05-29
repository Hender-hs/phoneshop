import { AddProductToCart, RemoveProductToCart, IncreaseProductAlreadyInCart, DecreaseProductAlreadyInCart } from './actions'
import { localStorageName } from './localStorageName'

export const AddProductToCartThunk = (product) => (dispatch, getState) => {

  const { Cart } = getState()

  let quantity = 1

  const hasSomeInCart = (el) => {
    el.name === product.name && (quantity = el.quantity)
    return el.name === product.name
  }

  const localStorageList = JSON.parse(localStorage.getItem(localStorageName)) || []

  if (Cart.some(hasSomeInCart)) {

    const localStorageListIncreased = localStorageList.map((element) => {

      if (element.name === product.name) {
        element.quantity += 1
        return element
      }
      return element
    })

    localStorage.setItem(localStorageName, JSON.stringify(localStorageListIncreased))

    return dispatch(IncreaseProductAlreadyInCart(product))
  }

  localStorageList.push({...product, quantity})
  localStorage.setItem(localStorageName, JSON.stringify(localStorageList))

  dispatch(AddProductToCart({...product, quantity}))
}

export const RemoveAllTheSameProductThunk = (product) => (dispatch) => {

  const localStorageList = JSON.parse(localStorage.getItem(localStorageName)) || []
  const filteredLocalStorageList = localStorageList.filter( (el) => el.id !== product.id )
  localStorage.setItem(localStorageName, JSON.stringify(filteredLocalStorageList))
  dispatch(RemoveProductToCart(product))
}

export const RemoveProductToCartThunk = (product) => (dispatch, getState) => {

  if (product.quantity === 1) {
    return
  }

  const { Cart } = getState()

  let quantity = Number

  const hasSomeInCart = (el) => {
    el.name === product.name && (quantity = el.quantity)
    return el.name === product.name
  }

  const localStorageList = JSON.parse(localStorage.getItem(localStorageName)) || []

  if (Cart.some(hasSomeInCart)) {

    const localStorageListDecrease = localStorageList.map((element) => {

      if (element.name === product.name) {
        element.quantity -= 1
        return element
      }
      return element
    })

    localStorage.setItem(localStorageName, JSON.stringify(localStorageListDecrease))

    return dispatch(DecreaseProductAlreadyInCart(product))
  }

}