import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
const SingleNewArrival = ({ product, products, setproducts, setcartlist }) => {
    const [isliked, setisliked] = useState()
    function addToCart() {
        var products_tmp = products
        const findIndex = products_tmp.findIndex((p) => p.id == product.id);
        products_tmp[findIndex].isincart = true
        setproducts(products_tmp)
        console.log(product.id)
        setcartlist(products.filter(product => product.isincart == true))
    }
    return (
        <>
            <div className="col-md-3 col-sm-4">

                <div id={product.id} className="single-new-arrival">
                    <div className="single-new-arrival-bg">
                        <div className='img-cont'>
                            <Image className="image" height={150} width={150}
                                src={product.imageUrl} alt="new-arrivals images" />
                        </div>
                        <div className="single-new-arrival-bg-overlay"></div>
                        {product.sale ? <div className={`sale ${product.bg}`}>
                            <p>sale</p>
                        </div> : null}
                        <div className="new-arrival-cart">
                            <p className='pointer add-to-cart' onClick={() => addToCart()}>
                                <span className="lnr lnr-cart"></span>
                                add <span>to </span> cart
                            </p>
                            <p className="arrival-review pull-right">
                                <span onClick={() => setisliked(!isliked)}
                                    className={`lnr lnr-heart ${isliked && 'red'}`}></span>
                                <span className="lnr lnr-frame-expand"></span>
                            </p>
                        </div>
                    </div>
                    <h4><a href="#">{product.title}</a></h4>
                    <p className="arrival-product-price">${product.orignalPrice - (product.discount / 100 * product.orignalPrice)}</p>
                </div>

            </div>
            <style jsx>{`
                .red{
                    color:red;
                }
                .pointer:hover{
                    cursor:pointer
                }
                `}</style>
        </>
    );
}

export default SingleNewArrival;
