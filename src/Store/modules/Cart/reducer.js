import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_PRODUCT, DECREASE_PRODUCT } from './actionsType'
import { localStorageName } from './localStorageName'

const localStorageList = JSON.parse(localStorage.getItem(localStorageName)) || []
console.log(localStorageList)
export const Cart = (state = localStorageList, { type, payload }) => {

  switch (type) {
    case ADD_PRODUCT: 
      return [...state, payload]

    case REMOVE_PRODUCT:
      return state.filter( (el) => el.id !== payload.id )

    case INCREASE_PRODUCT:
      return state.map((e) => {
        if (e.name === payload.name) {
          e.quantity += 1
          return e
        }
        return e
      })

    case DECREASE_PRODUCT:
      return state.map((e) => {
        if (e.name === payload.name) {
          e.quantity -= 1
          return e
        }
        return e
      })
      
    default:
      return state
  }
}