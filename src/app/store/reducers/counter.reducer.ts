import * as fromCounter from '../actions'
import * as fromModels from '../models';

export const initialState: fromModels.iCounter = {
	counter: 0
}

export function counterReducer(state: fromModels.iCounter = initialState, action: fromCounter.COUNTER) {
	switch (action.type) {
		case fromCounter.INCREMENT_COUNTER:
			return { counter: state.counter + action.payload };			
		case fromCounter.DECREMENT_COUNTER:
			return { counter: state.counter - action.payload };
		case fromCounter.RESET_COUNTER:
			return { counter: action.payload };
		default:
			return state;
	}
}