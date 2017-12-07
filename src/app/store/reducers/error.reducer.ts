import * as fromError from '../actions/error.actions'

export function errorReducer(state: {}, action: fromError.ERROR) {
	switch (action.type) {
		case fromError.HTTP_ERROR:
			return Object.assign({}, action.payload);
		default:
			return state;
	}
}