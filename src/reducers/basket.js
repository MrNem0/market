// eslint-disable-next-line no-unused-vars
import { ADD_PHONE_TO_BASKET,REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET } from '../constants'

const initialState = {
	items: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_PHONE_TO_BASKET:
			return {
				...state,
				items: [...state.items, action.payload],
			};

		case REMOVE_PHONE_FROM_BASKET:
			return {
				...state,
				items: state.items.filter(o => o.id !== action.payload),
			};
		case CLEAN_BASKET:
			return [];
		default:
			return state;
	}
};