import Axios from 'axios';

import {
	FETCH_PHONES_START,
	FETCH_PHONES_SUCCESS,
	FETCH_PHONES_FAILURE,
	ADD_PHONE_TO_BASKET,
	SEARCH_PHONE,
	REMOVE_PHONE_FROM_BASKET,
	CLEAN_BASKET
} from '../constants'

export const fetchPhones = () => async dispatch => {
	dispatch({type: FETCH_PHONES_START});

	try {
		const phones = Axios.get('https://www.mocky.io/v2/5185415ba171ea3a00704eed').then(r => r.data);
		await phones.then(data => dispatch({
			type: FETCH_PHONES_SUCCESS,
			payload: data
		}))
	} catch (err) {
		dispatch({
			type: FETCH_PHONES_FAILURE,
			payload: err,
			error: true
		})
	}
}

export const addPhoneToBasket = id => dispatch => {
	dispatch({
		type: ADD_PHONE_TO_BASKET,
		payload: id
	})
}

export const searchPhone = text => dispatch => {
	dispatch({
		type: SEARCH_PHONE,
		payload: text
	})
}

export const removePhoneFromBasket = id => async dispatch => {
	dispatch({
		type: REMOVE_PHONE_FROM_BASKET,
		payload: id
	})
}

export const cleanBasket = () => dispatch => {
	dispatch({
		type: CLEAN_BASKET
	})
}

export const basketCheckout = phones => () => {
	alert(JSON.stringify(phones))
}

// export const sortPhones =