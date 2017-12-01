import * as ProductsActions from '../actions';
export type Action = ProductsActions.All;

export function productsReducer(state: Object = {}, action: Action) {
	switch (action.type) {
		case ProductsActions.GET_PRODUCTS:
			return Object.assign({}, action.payload)
		default:
			return state;
	}
}