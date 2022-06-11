import React from 'react';
import Image from 'next/image'


import arrivals1 from '../assets/images/collection/arrivals1.png'
import arrivals2 from '../assets/images/collection/arrivals2.png'
import arrivals3 from '../assets/images/collection/arrivals3.png'
import arrivals4 from '../assets/images/collection/arrivals4.png'
import arrivals5 from '../assets/images/collection/arrivals5.png'
import arrivals6 from '../assets/images/collection/arrivals6.png'
import arrivals7 from '../assets/images/collection/arrivals7.png'
import arrivals8 from '../assets/images/collection/arrivals8.png'


const NewArrivals = () => {
    return (
        <>

            {/*new-arrivals start  */}
            <section id="new-arrivals" className="new-arrivals">
                <div className="container">
                    <div className="section-header">
                        <h2>new arrivals</h2>
                    </div>{/*/.section-header */}
                    <div className="new-arrivals-content">
                        <div className="row">
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <div className='img-cont'>
                                            <Image layout='fixed' src={arrivals1} alt="new-arrivals images" />
                                        </div>
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="sale bg-1">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">wooden chair</a></h4>
                                    <p className="arrival-product-price">$65.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <div className='img-cont'>
                                            <Image layout='fixed' src={arrivals2} alt="new-arrivals images" />
                                        </div>
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="sale bg-2">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">single armchair</a></h4>
                                    <p className="arrival-product-price">$80.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <div className='img-cont'>
                                            <Image layout='fixed' src={arrivals3} alt="new-arrivals images" />
                                        </div>
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">wooden armchair</a></h4>
                                    <p className="arrival-product-price">$40.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <div className='img-cont'>
                                            <Image layout='fixed' src={arrivals4} alt="new-arrivals images" />
                                        </div>
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="sale bg-1">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">stylish chair</a></h4>
                                    <p className="arrival-product-price">$100.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <div className='img-cont'>
                                            <Image layout='fixed' src={arrivals5} alt="new-arrivals images" />
                                        </div>
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">modern chair</a></h4>
                                    <p className="arrival-product-price">$120.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <div className='img-cont'>
                                            <Image layout='fixed' src={arrivals6} alt="new-arrivals images" />
                                        </div>
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="sale bg-1">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">mapple wood dinning table</a></h4>
                                    <p className="arrival-product-price">$140.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <div className='img-cont'>
                                            <Image layout='fixed' src={arrivals7} alt="new-arrivals images" />
                                        </div>
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="sale bg-2">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">arm chair</a></h4>
                                    <p className="arrival-product-price">$90.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <div className='img-cont'>
                                            <Image layout='fixed' src={arrivals8} alt="new-arrivals images" />
                                        </div>
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">wooden bed</a></h4>
                                    <p className="arrival-product-price">$140.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/*/.container */}

            </section>{/*/.new-arrivals */}
            {/*new-arrivals end  */}
        </>
    );
}

export default NewArrivals;
