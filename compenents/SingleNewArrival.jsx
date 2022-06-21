import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
const SingleNewArrival = ({ product, products, setproducts, setcartlist }) => {
    const [isliked, setisliked] = useState()
    const [moreInfo, setmoreInfo] = useState(false)
    function addToCart() {
        if (!product.isincart) {
            console.log(products)
            var products_tmp = products
            const findIndex = products_tmp.findIndex((p) => p.id == product.id);
            products_tmp[findIndex].isincart = true
            setproducts(products_tmp)
            console.log(product.id)
            setcartlist(products.filter(product => product.isincart == true))
        }
        else {
            var products_tmp = products
            const findIndex = products_tmp.findIndex((p) => p.id == product.id);
            products_tmp[findIndex].quantity++
            setproducts(products_tmp)

            setcartlist(products.filter(product => product.isincart == true))
            console.log(product.id)
        }
    }
    return (
        <>
            {product.isvisible && <div id={`cont`} className={`col-md-3 col-sm-4 ${product.id}`}>

                <div id={product.id} className="single-new-arrival">

                    <div className="single-new-arrival-bg">
                        {moreInfo &&
                            <div className='more-info-cont'>
                                {product.isincart ?
                                    <>
                                        <p>is product in cart: yes </p>
                                        <p>quantity bought:{product.quantity} </p>
                                        <p>Orignal Price:{product.orignalPrice}</p>
                                        <p>discount:{product.discount}%</p>
                                        <p>Unit price:{product.orignalPrice - (product.discount / 100 * product.orignalPrice)}</p>
                                        <p>Total price:{(product.orignalPrice - (product.discount / 100 * product.orignalPrice)) * product.quantity}</p>
                                    </> :
                                    <>
                                        <p>is product in cart: no </p>
                                        <p>quantity bought:0 </p>
                                        <p>Orignal Price:{product.orignalPrice}</p>
                                        <p>discount:{product.discount}%</p>
                                        <p>Unit price:{product.orignalPrice - (product.discount / 100 * product.orignalPrice)}</p>
                                    </>
                                }
                            </div>
                        }
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
                                <button onClick={() => setmoreInfo(!moreInfo)}
                                    className='more-info-button'>{moreInfo ? 'less' : 'more'} info</button>
                            </p>
                        </div>

                    </div>
                    <h4><a href="#">{product.title}</a></h4>
                    <p className="arrival-product-price">${product.orignalPrice - (product.discount / 100 * product.orignalPrice)}</p>

                </div>


            </div>}
            <style jsx>{`
                .more-info-button{
                    color:#e99c2e;
                    margin-right:2rem
                }
                {/*}
                .bg-1,.bg-2{
                    z-index:2
                }
                {*/}
                .new-arrival-cart{
                    z-index:2
                }
                .more-info-cont{
                    position:absolute;
                    z-index:1;
                    width:100%;
                    height:100%;
                    background-color:rgba(0,0,0,0.8)
                }
                .red{
                    color:red;
                }
                .pointer:hover{
                    cursor:pointer
                }
                .img-cont{
                    width:100%;
                    position:absolute !important;

                }
                .img-cont > div{
                    position:absolute !important
                }
                .image{
                    object-fit:contain;
                    width:50% !important;
                    position:relative !important;
                    height:unset !important
                }
                `}</style>
        </>
    );
}

export default SingleNewArrival;
