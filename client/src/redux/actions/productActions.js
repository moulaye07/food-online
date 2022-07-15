import axios from 'axios';
import {
	GET_PRODUCTS,
} from '../constants/productConstants';
import { REACT_APP_API_URL } from '../../API_URL';


export const getProducts = () => async dispatch => {
	try {
		const response = await axios.get(`${REACT_APP_API_URL}api/product/`);
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
