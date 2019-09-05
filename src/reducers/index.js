import { combineReducers } from 'redux';

import books from './phones';
import cart from './basket';
import filter from './filter';

export default combineReducers({
	books,
	cart,
	filter,
});