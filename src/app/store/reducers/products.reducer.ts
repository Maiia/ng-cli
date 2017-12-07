import * as fromProducts from '../actions/products.actions'

export const initialState = []

export function productsReducer(state = initialState, action: fromProducts.PRODUCTS) {
	switch (action.type) {
		case fromProducts.LOAD_PRODUCTS:
			return state;
		case fromProducts.LOAD_PRODUCTS_SUCCESS:
			return action.payload
		case fromProducts.LOAD_PRODUCTS_FAIL:
			return state
		default:
			return state;
	}
}