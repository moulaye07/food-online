import React, { useEffect } from 'react';
import { getProducts } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

import Menu from './Menu';
import AboutUs from './AboutUs';
import Book from './Book';
import Footer from './Footer';
import { getCategories } from '../redux/actions/categoryActions';


const Home = () => {
	const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getProducts());
		dispatch(getCategories());
	}, [dispatch]);

    return (
        <>
        <Menu />
        <AboutUs />
        <Book />
        <Footer />
        </>
    );
};

export default Home;