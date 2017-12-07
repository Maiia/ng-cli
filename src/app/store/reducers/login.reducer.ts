import * as fromAuth from '../actions/auth.actions'

export function loginReducer(state: Object = {}, action: fromAuth.AUTH) {
	switch (action.type) {
		case fromAuth.USER_LOGGED_IN:
			return Object.assign({}, action.payload);
		case fromAuth.USER_LOGGED_OUT:
			return Object.assign({});
		default:
			return state;
	}
}