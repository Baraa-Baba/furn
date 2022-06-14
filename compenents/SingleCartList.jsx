import React from 'react';
import arrivals1 from '../assets/images/collection/arrivals1.png'
import Image from 'next/image';
const SingleCartList = ({ products, product, setproducts, setcartlist }) => {
    function removecartitem() {
        var products_tmp = products
        const findIndex = products_tmp.findIndex((p) => p.id == product.id);
        products_tmp[findIndex].isincart = false
        setproducts(products_tmp)

        setcartlist(products.filter(product => product.isincart == true))
        console.log(product.id)
    }
    return (
        <>
            <li className="single-cart-list">
                <a href="#" className="photo"> <div className='cart-thumb' >
                    <Image src={product.imageUrl} height={50} width={50} alt="image" />
                </div>
                </a>
                <div className="cart-list-txt">
                    <h6><a href="#">{product.title}</a></h6>
                    <p>{product.quantity} x - <span className="price">${product.orignalPrice - (product.discount / 100 * product.orignalPrice)}</span></p>
                </div>{/*/.cart-list-txt */}
                <div className="cart-close">
                    <span onClick={() => removecartitem()} className="lnr lnr-cross"></span>
                </div>{/*/.cart-close */}
            </li>{/*/.single-cart-list  */}
            <style jsx>{`
                .lnr-cross:hover{
                    color:red;
                }
                `}</style>
        </>
    );
}

export default SingleCartList;
