import React from 'react';
import pizza from './images/f1.png';
import { useSelector } from 'react-redux';



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

                        <div class="col-sm-6 col-lg-4 all pizza">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img src={pizza} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>Pizza</h5>
                                        <p>
                                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                        </p>
                                        <div class="options">
                                            <h6>
                                                $20
                                            </h6>
                                            <a href=''>
                                                cat
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4 all pizza">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img src={pizza} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>Pizza</h5>
                                        <p>
                                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                        </p>
                                        <div class="options">
                                            <h6>
                                                $20
                                            </h6>
                                            <a href=''>
                                                cat
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4 all pizza">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img src={pizza} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>Pizza</h5>
                                        <p>
                                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                        </p>
                                        <div class="options">
                                            <h6>
                                                $20
                                            </h6>
                                            <a href=''>
                                                cat
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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