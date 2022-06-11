import React from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';

import arrivals1 from '../assets/images/collection/arrivals1.png'
import arrivals2 from '../assets/images/collection/arrivals2.png'
import arrivals3 from '../assets/images/collection/arrivals3.png'
import arrivals4 from '../assets/images/collection/arrivals4.png'
import arrivals5 from '../assets/images/collection/arrivals5.png'
import arrivals6 from '../assets/images/collection/arrivals6.png'
import arrivals7 from '../assets/images/collection/arrivals7.png'
import arrivals8 from '../assets/images/collection/arrivals8.png'

const Navbar = () => {
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
                            <li className="nav-setting">
                                <a href="#"><span className="lnr lnr-cog"></span></a>
                            </li>{/*/.search */}
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >
                                    <span className="lnr lnr-cart"></span>
                                    <span className="badge badge-bg-1">2</span>
                                </a>
                                <ul className="dropdown-menu cart-list s-cate">
                                    <li className="single-cart-list">
                                        <a href="#" className="photo"> <div className='cart-thumb' >
                                            <Image src={arrivals1} layout='intrinsic' alt="image" />
                                        </div>
                                        </a>
                                        <div className="cart-list-txt">
                                            <h6><a href="#">arm <br /> chair</a></h6>
                                            <p>1 x - <span className="price">$180.00</span></p>
                                        </div>{/*/.cart-list-txt */}
                                        <div className="cart-close">
                                            <span className="lnr lnr-cross"></span>
                                        </div>{/*/.cart-close */}
                                    </li>{/*/.single-cart-list  */}
                                    <li className="single-cart-list">
                                        <a href="#" className="photo">
                                            <Image src={arrivals2} layout='intrinsic' alt="image" />
                                        </a>
                                        <div className="cart-list-txt">
                                            <h6><a href="#">single <br /> armchair</a></h6>
                                            <p>1 x - <span className="price">$180.00</span></p>
                                        </div>{/*/.cart-list-txt */}
                                        <div className="cart-close">
                                            <span className="lnr lnr-cross"></span>
                                        </div>{/*/.cart-close */}
                                    </li>{/*/.single-cart-list  */}
                                    <li className="single-cart-list">
                                        <a href="#" className="photo">
                                            <Image src={arrivals3} layout='intrinsic' alt="image" />
                                        </a>
                                        <div className="cart-list-txt">
                                            <h6><a href="#">wooden arn <br /> chair</a></h6>
                                            <p>1 x - <span className="price">$180.00</span></p>
                                        </div>{/*/.cart-list-txt */}
                                        <div className="cart-close">
                                            <span className="lnr lnr-cross"></span>
                                        </div>{/*/.cart-close */}
                                    </li>{/*/.single-cart-list  */}
                                    <li className="total">
                                        <span>Total: $0.00</span>
                                        <button className="btn-cart pull-right" >view cart</button>
                                    </li>
                                </ul>
                            </li>{/*/.dropdown */}
                        </ul>
                    </div>{/*/.attr-nav */}
                    {/* End Atribute Navigation  */}

                    {/* Start Header Navigation  */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand" href="#">furn.</a>

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

            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
            <Script type="text/javascript" src="/static/bootstrap.min.js"></Script>
            {/*modernizr.min.js */}
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js."></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></Script>
            <Script type="text/javascript" src="/static/custom.js"></Script>
        </>
    );
}

export default Navbar;
