import * as LoginActions from '../actions';
export type Action = LoginActions.AUTH;

export function loginReducer(state: Object = {}, action: Action) {
	switch (action.type) {
		case LoginActions.USER_LOGGED_IN:
			return Object.assign({}, action.payload);
		case LoginActions.USER_LOGGED_OUT:
			return Object.assign({});
		default:
			return state;
	}
}