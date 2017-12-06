import { PRODUCTS, LOAD_PRODUCTS, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAIL } from '../actions'

export const initialState = []

export function productsReducer(state = initialState, action: PRODUCTS) {
	switch (action.type) {
		case LOAD_PRODUCTS:
			return state;
		case LOAD_PRODUCTS_SUCCESS:
			return action.payload
		case LOAD_PRODUCTS_FAIL:
			return state
		default:
			return state;
	}
}