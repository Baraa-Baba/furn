import React from 'react';
import { useEffect } from 'react';
import CartProducts from './CartProducts';
import Image from 'next/image';
import logo from '../assets/logo/logo.png'
import Script from 'next/script';

const Navbar = ({ products, setproducts, cartlist, setcartlist }) => {
    useEffect(() => {

        var $ = require("jquery");
        window.$ = window.jQuery = require("jquery");
        var bootstrap = require('bootstrap');
        // 4. cart-close
        $(".cart-close").click(function () {
            $(this).parents(".single-cart-list").fadeOut();
        });



    }, [])
    return (
        <>
            {/* Start Navigation  */}
            <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                {/* Start Top Search  */}
                <div className="top-search">
                    <div className="container">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-search"></i></span>
                            <input type="text" className="form-control" placeholder="Search" />
                            <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                        </div>
                    </div>
                </div>
                {/* End Top Search  */}

                <div className="container">
                    {/* Start Atribute Navigation  */}
                    <div className="attr-nav">
                        <ul>
                            <li className="search">
                                <a href="#"><span className="lnr lnr-magnifier"></span></a>
                            </li>{/*/.search */}
                            <CartProducts cartlist={cartlist} setcartlist={setcartlist} products={products} setproducts={setproducts} />
                        </ul>
                    </div>{/*/.attr-nav */}
                    {/* End Atribute Navigation  */}

                    {/* Start Header Navigation  */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand" href="#"><Image layout='fixed' src={logo} /></a>

                    </div>{/*/.navbar-header */}
                    {/* End Header Navigation  */}

                    {/* Collect the nav links, forms, and other content for toggling  */}
                    <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                        <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                            <li className=" scroll active"><a href="#home">home</a></li>
                            <li className="scroll"><a href="#new-arrivals">new arrival</a></li>
                            <li className="scroll"><a href="#feature">features</a></li>
                            <li className="scroll"><a href="#blog">blog</a></li>
                            <li className="scroll"><a href="#newsletter">contact</a></li>
                        </ul>{/*/.nav  */}
                    </div>{/* /.navbar-collapse  */}
                </div>{/*/.container */}
            </nav>{/*/nav */}
            {/* End Navigation  */}

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script type="text/javascript" src="/static/bootstrap.min.js"></script>
            {/*modernizr.min.js */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js."></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
            <script type="text/javascript" src="/static/custom.js"></script>
        </>
    );
}

export default Navbar;
