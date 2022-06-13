import React from 'react';
import Image from 'next/image';

import SingleCartList from './SingleCartList'
import { useEffect, useState } from 'react';
const CartProducts = ({ props }) => {
    const products = props.products
    return (
        <>
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >
                    <span className="lnr lnr-cart"></span>
                    <span className="badge badge-bg-1">2</span>
                </a>
                <ul className="dropdown-menu cart-list s-cate">


                    {products.map(product =>
                        <div key={product.id}>
                            <SingleCartList product={product} />
                        </div>)}
                    <li className="total">
                        <span>Total: $0.00</span>
                        <button className="btn-cart pull-right" >view cart</button>
                    </li>
                </ul>
            </li>{/*/.dropdown */}
        </>
    );
}

export default CartProducts;
