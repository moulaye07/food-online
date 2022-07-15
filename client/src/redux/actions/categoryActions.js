import {
	GET_CATEGORIES,
} from '../constants/categoryConstants';
import { REACT_APP_API_URL } from '../../API_URL';
import axios from 'axios';

export const getCategories = () => async dispatch => {
	try {
		const response = await axios.get(`${REACT_APP_API_URL}api/category`);
		dispatch({ type: GET_CATEGORIES, payload: response.data.categories });
	} catch (err) {
		console.log('getCategories api error: ', err);
	}
};