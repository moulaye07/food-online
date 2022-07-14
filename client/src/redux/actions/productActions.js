import axios from 'axios';
import {
	GET_PRODUCTS,
} from '../constants/productConstants';

export const getProducts = () => async dispatch => {
	try {
		const response = await axios.get('/api/product');
		dispatch({
			type: GET_PRODUCTS,
			payload: response.data.products,
		});
	} catch (err) {
		console.log('getProducts api error: ', err);
	}
};

export const getProductsByCount = () => async dispatch => {
	try {
		const response = await axios.get('/api/product/count');
		dispatch({
			type: GET_PRODUCTS,
			payload: response.data.products,
		});
	} catch (err) {
		console.log('getProducts api error: ', err);
	}
};
