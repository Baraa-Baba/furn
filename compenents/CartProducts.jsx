import React from 'react';
import Image from 'next/image';
import CartItemInViewMode from './CartItemInViewMode.jsx';
import SingleCartList from './SingleCartList.jsx'
import { useEffect, useState } from 'react';
import SendToEmail from './SendToEmail.jsx';
const CartProducts = ({ products, setproducts, cartlist, setcartlist }) => {
    const [state, setstate] = useState(false)
    const [cartViewMode, setcartViewMode] = useState(false)
    useEffect(() => {
        document.getElementById('view-cart').addEventListener('click', () => {
            setcartViewMode(true)
        })
    }, [])
    useEffect(() => {
        setcartlist(products.filter(product => product.isincart == true))
    }, [products, setproducts, state])
    function getottalprice() {
        var totalprice = 0
        cartlist.forEach((product) => {
            var price = (product.orignalPrice - (product.discount / 100 * product.orignalPrice)) * product.quantity
            totalprice += price
        })
        return totalprice
    }
    function handleClick() {
        console.log('ss')
        setcartViewMode(true)
    }
    useEffect(() => {
        if (cartViewMode) {
            document.querySelector('body').style.overflowY = 'hidden'
        } else {
            document.querySelector('body').style.overflowY = 'visible'
        }

    }, [cartViewMode])
    return (
        <>
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >
                    <span className="lnr lnr-cart"></span>
                    <span className="badge badge-bg-1">{cartlist.length}</span>
                </a>
                <ul className="dropdown-menu cart-list s-cate">

                    {cartlist.length !== 0 ? cartlist.map(product =>
                        <div key={product.id}>
                            <SingleCartList cartlist={cartlist} setcartlist={setcartlist} product={product} products={products} setproducts={setproducts} />
                        </div>)
                        : <p>looks like there is no products in the cart</p>
                    }
                    <li className="total">
                        <span>Total: ${getottalprice()}</span>
                        <button id="view-cart" className="btn-cart pull-right" >view cart</button>
                    </li>
                </ul>
            </li>{/*/.dropdown */}
            {cartViewMode ?
                <div id="cart-view-cont" className="cart-view-cont">
                    <div id="cart-cont">
                        <h1>cart Items</h1>
                        <span className='price'>Total: ${getottalprice()}</span>
                        {cartlist.map(product =>
                            <div key={product.id}>
                                <CartItemInViewMode cartlist={cartlist} setcartlist={setcartlist} product={product} products={products} setproducts={setproducts} />
                            </div>)}
                        <span onClick={() => setcartViewMode(false)} className="lnr lnr-cross"></span>
                        <SendToEmail cartlist={cartlist} />
                    </div>
                </div> : null}
            <style jsx>{`
                .lnr-cross{
                    font-size:5rem;
                    top:0;
                    right:20px;
                    position:absolute;
                    transition:all 0.5s ease;
                }
                .lnr-cross:hover{
                    color:red;
                    cursor:pointer;
                }
                .cart-view-cont{
                    top:0;
                    left:0;
                    color:white;
                    z-index:30;
                    height:100vh;
                    position:fixed;
                    min-width:100vw;
                }
                #cart-cont{
                    top:0;
                    background:rgba(0,0,0,0.9);
                    left:0;
                    width:100vw;
                    height:100vh;
                    overflow-y:scroll;
                    position:auto;
                    
                    z-index:30;
                }
                .cart-view-cont h1{
                    z-index:40;
                    color:white;
                    text-align:center;
                }
                .price{
                    font-size:3rem;
                }
                `}</style>
        </>
    );
}

export default CartProducts;
