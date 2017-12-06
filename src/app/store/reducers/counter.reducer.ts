import * as CounterActions from '../actions';
export type Action = CounterActions.COUNTER;

export function counterReducer(state: number = 0, action: Action) {
	switch (action.type) {
		case CounterActions.INCREMENT_COUNTER:
			return state + action.payload;
		case CounterActions.DECREMENT_COUNTER:
			return state - action.payload;
		case CounterActions.RESET_COUNTER:
			return action.payload;
		default:
			return state;
	}
}