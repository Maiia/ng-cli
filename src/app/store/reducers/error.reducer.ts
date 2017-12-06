import { HTTP_ERROR, ERROR } from '../actions'

export function errorReducer(state: {}, action: ERROR) {
	switch (action.type) {
		case HTTP_ERROR:
			return Object.assign({}, action.payload);
		default:
			return state;
	}
}