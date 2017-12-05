import * as ProductsActions from '../actions';
export type Action = ProductsActions.All;

export const initialState = []

export function productsReducer(state = initialState, action: Action) {
	switch (action.type) {
		case ProductsActions.LOAD_PRODUCTS:
			return state;
		case ProductsActions.LOAD_PRODUCTS_SUCCESS:
			return action.payload
		case ProductsActions.LOAD_PRODUCTS_FAIL:
			return state
		default:
			return state;
	}
}