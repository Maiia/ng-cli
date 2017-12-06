import { AUTH, USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions'

export function loginReducer(state: Object = {}, action: AUTH) {
	switch (action.type) {
		case USER_LOGGED_IN:
			return Object.assign({}, action.payload);
		case USER_LOGGED_OUT:
			return Object.assign({});
		default:
			return state;
	}
}