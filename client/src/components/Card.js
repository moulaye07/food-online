import React from 'react';
import pizza from './images/f1.png';


const Card = ({product}) => {
    return (
                        <div class="col-sm-6 col-lg-4 all pizza">
                            <div class="box">
                                <div>
                                    <div class="img-box">
                                        <img src={`./images/${product.fileName}`} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>{product.name}</h5>
                                        <p>
                                            {product.description}
                                        </p>
                                        <div class="options">
                                            <h6>
                                                ${product.price}
                                            </h6>
                                            <a href=''>
                                                cat
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
};

export default Card;