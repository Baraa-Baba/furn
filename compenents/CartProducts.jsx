import React from 'react';
import Image from 'next/image';

import SingleCartList from './SingleCartList.jsx'
import { useEffect, useState } from 'react';
const CartProducts = ({ products, setproducts, cartlist, setcartlist }) => {
    const [state, setstate] = useState(false)
    useEffect(() => {
        setcartlist(products.filter(product => product.isincart == true))
    }, [products, setproducts, state])
    function getottalprice() {
        var totalprice = 0
        cartlist.forEach((product) => {
            var price = product.orignalPrice - (product.discount / 100 * product.orignalPrice)
            totalprice += price
        })
        return totalprice
    }
    return (
        <>
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >
                    <span className="lnr lnr-cart"></span>
                    <span className="badge badge-bg-1">{cartlist.length}</span>
                </a>
                <ul className="dropdown-menu cart-list s-cate">

                    {cartlist.map(product =>
                        <div key={product.id}>
                            <SingleCartList cartlist={cartlist} setcartlist={setcartlist} product={product} products={products} setproducts={setproducts} />
                        </div>)}
                    <li className="total">
                        <span>Total: ${getottalprice()}</span>
                        <button className="btn-cart pull-right" >view cart</button>
                    </li>
                </ul>
            </li>{/*/.dropdown */}
        </>
    );
}

export default CartProducts;
