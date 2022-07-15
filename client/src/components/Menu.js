import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';



const Menu = () => {

	const { products } = useSelector(state => state.products);
	const { categories } = useSelector(state => state.categories);


    const showMenu = () => (
        <section class="food_section layout_padding-bottom">
             <div class="container">
                <div class="heading_container heading_center">
                    <h2>
                        Our Menu
                    </h2>
                </div>
                <ul class="filters_menu">
                    <li class="active" data-filter="*">All</li>
                    {categories && categories.map(category => (
                        <li key={category._id} data-filter=".fries">{category.category}</li>
                    ))}
                </ul>
                <div class="filters-content">
                    <div class="row grid">
                        {products && products.map(product => (
                            <Card key={product._id} product={product}/>
                        ))}
                    </div>
                </div>
                
                <div class="btn-box">
                    <a href="">
                        View More
                    </a>
                </div>
            </div>
        </section>

        
    );


    return (
        <>{showMenu()}</>
    );
};

export default Menu;