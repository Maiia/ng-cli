import * as ErrorActions from '../actions';
export type Action = ErrorActions.All;

export function errorReducer(state: {}, action: Action) {
	switch (action.type) {
		case ErrorActions.HTTP_ERROR:
			return Object.assign({}, action.payload);
		default:
			return state;
	}
}