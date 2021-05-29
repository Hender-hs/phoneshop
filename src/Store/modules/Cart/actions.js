import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_PRODUCT, DECREASE_PRODUCT } from "./actionsType"

export const AddProductToCart = (payload) => ({type: ADD_PRODUCT, payload})
export const RemoveProductToCart = (payload) => ({type: REMOVE_PRODUCT, payload})
export const IncreaseProductAlreadyInCart = (payload) => ({type: INCREASE_PRODUCT, payload})
export const DecreaseProductAlreadyInCart = (payload) => ({type: DECREASE_PRODUCT, payload})
