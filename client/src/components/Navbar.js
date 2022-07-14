import React from 'react';
import ImgHome from './ImgHome';
//import imageHome from './hero-bg.jpg';


const Navbar = () => {

    const showNavBar = () => (
        <div class="hero_area">
            <ImgHome />
            <header class="header_section" style={{backgroundColor:"black"}}>
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container ">
                        <a class="navbar-brand" href="index.html">
                            <span>
                                Food-online
                            </span>
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class=""> </span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav  mx-auto ">
                                <li class="nav-item active">
                                    <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="">Menu</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="">Book Table</a>
                                </li>
                            </ul>
                            <div class="user_option">
                                <a href="" class="user_link">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </a>
                                <a class="cart_link" href="#">
                                    cart
                                </a>
                                <form class="form-inline">
                                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                                <a href="" class="order_online">
                                    Order Online
                                </a>
                            </div>
                        </div>

                    </nav>
                    
                </div>
            </header>
        </div>
        );

    return <>
            {showNavBar()}
        </>
    
};

export default Navbar;