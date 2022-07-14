import {
	GET_CATEGORIES,
} from '../constants/categoryConstants';
import axios from 'axios';

export const getCategories = () => async dispatch => {
	try {
		const response = await axios.get('/api/category');
		dispatch({ type: GET_CATEGORIES, payload: response.data.categories });
	} catch (err) {
		console.log('getCategories api error: ', err);
	}
};