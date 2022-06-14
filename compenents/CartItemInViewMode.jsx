import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
const CartItemInViewMode = ({ products, product, setproducts, setcartlist }) => {
    function removecartitem() {
        var products_tmp = products
        const findIndex = products_tmp.findIndex((p) => p.id == product.id);
        products_tmp[findIndex].isincart = false
        setproducts(products_tmp)

        setcartlist(products.filter(product => product.isincart == true))
        console.log(product.id)
    }
    function increaseQunatity() {
        var products_tmp = products
        const findIndex = products_tmp.findIndex((p) => p.id == product.id);
        products_tmp[findIndex].quantity++
        setproducts(products_tmp)

        setcartlist(products.filter(product => product.isincart == true))
        console.log(product.id)
    }
    function decreaseQunatity() {
        if (product.quantity > 1) {
            var products_tmp = products
            const findIndex = products_tmp.findIndex((p) => p.id == product.id);
            products_tmp[findIndex].quantity--
            setproducts(products_tmp)

            setcartlist(products.filter(product => product.isincart == true))
            console.log(product.id)
        }
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
                        <div id='new-arrival-cart' className="new-arrival-cart">

                            <span id="remove-cart" className='pointer add-to-cart' onClick={() => removecartitem()}>
                                <p className='remove-text'>
                                    remove <span>from </span> cart
                                </p>
                            </span>
                        </div>
                    </div>
                    <h4 id='title' className='title'>{product.title}</h4>
                    <div>
                        <button onClick={() => decreaseQunatity()} className='pointer change 
                        decrease-quantity'>-</button>
                        <button onClick={() => increaseQunatity()} className='pointer change 
                        increase-quantity'>+</button>
                    </div>

                    <span id="arrival-product-quantity">{product.quantity}X-</span>
                    <span id="arrival-product-price">
                        ${product.orignalPrice - (product.discount / 100 * product.orignalPrice)}
                    </span>
                    <p>
                        ${(product.orignalPrice - (product.discount / 100 * product.orignalPrice)) * product.quantity}
                    </p>
                </div>

            </div>
            <style jsx>{`
                #arrival-product-price{
                    color:white;
                    font-size:2rem
                }
                #arrival-product-quantity{
                    color:white;
                    font-size:2rem
                }
                .change{
                    font-size:4rem;
                    width:4rem;
                }
                .decrease-quantity{
                    background:red;
                    margin-right:1rem;
                }
                .increase-quantity{
                    background:blue;
                    margin-left:1rem;
                }
                .change-quantity{
                    font-size:3rem;
                    position:absolute;
                    user-selection:none;
                    top:0
                }
                .remove-text{
                    font-size:2rem
                }
                .remove-text:hover{
                    color:red
                }
                span{
                    margin:0 0 0 0;
                    padding:0 0 0 0
                    
                }
                #remove-cart{
                    margin:0 0 0 0;
                    padding:0 0 0 0;
                }
.red{
    color:red;
}
.pointer:hover{
    cursor:pointer
}
.change-quantity{
    display:inline-block
}
.add-to-cart{
    display:inline-block;
}
#new-arrival-cart{
    height:5rem
}
.add-to-cart:hover{
    color:red
}
#title{
    color:white !important;
    font-size:3rem
}
`}</style>
        </>
    );
}

export default CartItemInViewMode;
