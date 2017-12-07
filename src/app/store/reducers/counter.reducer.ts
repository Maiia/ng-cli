import { COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '../actions'
import { iCounter } from '../models';

export const initialState: iCounter = {
	counter: 0
}

export function counterReducer(state: iCounter = initialState, action: COUNTER) {
	switch (action.type) {
		case INCREMENT_COUNTER:
			return { counter: state.counter + action.payload };			
		case DECREMENT_COUNTER:
			return { counter: state.counter - action.payload };
		case RESET_COUNTER:
			return { counter: action.payload };
		default:
			return state;
	}
}