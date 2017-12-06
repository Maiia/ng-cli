import * as CounterActions from '../actions';
export type Action = CounterActions.COUNTER;
import { iCounter } from '../models/counter.model';

export const initialState: iCounter = {
	counter: 0
}

export function counterReducer(state: iCounter = initialState, action: Action) {
	switch (action.type) {
		case CounterActions.INCREMENT_COUNTER:
			return { counter: state.counter + action.payload };			
		case CounterActions.DECREMENT_COUNTER:
			return { counter: state.counter - action.payload };
		case CounterActions.RESET_COUNTER:
			return { counter: action.payload };
		default:
			return state;
	}
}