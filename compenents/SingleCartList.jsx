import React from 'react';
import arrivals1 from '../assets/images/collection/arrivals1.png'
import Image from 'next/image';
const SingleCartList = ({ product }) => {
    return (
        <>
            <li className="single-cart-list">
                <a href="#" className="photo"> <div className='cart-thumb' >
                    <Image src={product.imageUrl} height={55} width={55} alt="image" />
                </div>
                </a>
                <div className="cart-list-txt">
                    <h6><a href="#">{product.title}</a></h6>
                    <p>1 x - <span className="price">${product.orignalPrice - (product.discount / 100 * product.orignalPrice)}</span></p>
                </div>{/*/.cart-list-txt */}
                <div className="cart-close">
                    <span className="lnr lnr-cross"></span>
                </div>{/*/.cart-close */}
            </li>{/*/.single-cart-list  */}
        </>
    );
}

export default SingleCartList;
