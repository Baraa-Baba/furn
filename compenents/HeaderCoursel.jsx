import React from 'react';
import Image from 'next/image';

import { useState } from 'react';
import slider1 from '../assets/images/slider/slider1.png'
import slider2 from '../assets/images/slider/slider2.png'
import slider3 from '../assets/images/slider/slider3.png'

const HeaderCoursel = () => {
    const [MoreInfoOne, setMoreInfoOne] = useState(false)
    const [MoreInfoTwo, setMoreInfoTwo] = useState(false)
    const [MoreInfoThree, setMoreInfoThree] = useState(false)
    return (
        <>

            <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                {/*/.carousel-indicator  */}
                <ol className="carousel-indicators">
                    <li data-target="#header-carousel" data-slide-to="0" className="active"><span className="small-circle"></span></li>
                    <li data-target="#header-carousel" data-slide-to="1"><span className="small-circle"></span></li>
                    <li data-target="#header-carousel" data-slide-to="2"><span className="small-circle"></span></li>
                </ol>{/* /ol */}
                {/*/.carousel-indicator  */}

                {/*/.carousel-inner */}
                <div className="carousel-inner" role="listbox">
                    {/* .item */}
                    <div className="item active">
                        <div className="single-slide-item slide1">
                            <div className="container">
                                <div className="welcome-hero-content">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <div className="single-welcome-hero">
                                                <div className="welcome-hero-txt">
                                                    <h4>great design collection</h4>
                                                    <h2>cloth covered accent chair</h2>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                                    </p>
                                                    <div className="packages-price">
                                                        <p>
                                                            $ 399.00
                                                            <del>$ 499.00</del>
                                                        </p>
                                                    </div>
                                                    {MoreInfoOne &&
                                                        <>
                                                            <p>more details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, placeat.</p>
                                                            <p>Orignal Price:$ 499.00</p>
                                                            <p>discount : 20%</p>
                                                            <p>after discount price:  $ 399.00</p>
                                                        </>
                                                    }
                                                    <button
                                                        onClick={() => setMoreInfoOne(!MoreInfoOne)}
                                                        className="btn-cart orange-bg welcome-add-cart welcome-more-info" >
                                                        {MoreInfoOne ? 'less info' : 'more info'}
                                                    </button>
                                                </div>{/*.welcome-hero-txt*/}
                                            </div>{/*/.single-welcome-hero */}
                                        </div>{/*/.col */}
                                        <div className="col-sm-5">
                                            <div className="single-welcome-hero">
                                                <div className="welcome-hero-img">
                                                    <Image layout='fixed' src={slider1} alt="slider image" />
                                                </div>{/*/.welcome-hero-txt */}
                                            </div>{/*/.single-welcome-hero */}
                                        </div>{/*/.col */}
                                    </div>{/*/.row */}
                                </div>{/*/.welcome-hero-content */}
                            </div>{/* /.container */}
                        </div>{/* /.single-slide-item */}

                    </div>{/* /.item .active */}

                    <div className="item">
                        <div className="single-slide-item slide2">
                            <div className="container">
                                <div className="welcome-hero-content">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <div className="single-welcome-hero">
                                                <div className="welcome-hero-txt">
                                                    <h4>great design collection</h4>
                                                    <h2>mapple wood accent chair</h2>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                                    </p>
                                                    <div className="packages-price">
                                                        <p>
                                                            $ 199.00
                                                            <del>$ 299.00</del>
                                                        </p>
                                                    </div>
                                                    {MoreInfoTwo &&
                                                        <>
                                                            <p>more details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, placeat.</p>
                                                            <p>Orignal Price:$ 299.00</p>
                                                            <p>discount : 33.33%</p>
                                                            <p>after discount price:  $ 199.00</p>
                                                        </>
                                                    }
                                                    <button onClick={() => setMoreInfoTwo(!MoreInfoTwo)} className="btn-cart orange-bg welcome-add-cart welcome-more-info" >
                                                        {MoreInfoTwo ? 'less info' : 'more info'}
                                                    </button>
                                                </div>{/*/.welcome-hero-txt */}
                                            </div>{/*/.single-welcome-hero */}
                                        </div>{/*/.col */}
                                        <div className="col-sm-5">
                                            <div className="single-welcome-hero">
                                                <div className="welcome-hero-img">
                                                    <Image layout='fixed' src={slider2} alt="slider image" />
                                                </div>{/*/.welcome-hero-txt */}
                                            </div>{/*/.single-welcome-hero */}
                                        </div>{/*/.col */}
                                    </div>{/*/.row */}
                                </div>{/*/.welcome-hero-content */}
                            </div>{/* /.container */}
                        </div>{/* /.single-slide-item */}

                    </div>{/* /.item .active */}

                    <div className="item">
                        <div className="single-slide-item slide3">
                            <div className="container">
                                <div className="welcome-hero-content">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <div className="single-welcome-hero">
                                                <div className="welcome-hero-txt">
                                                    <h4>great design collection</h4>
                                                    <h2>valvet accent arm chair</h2>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                                    </p>
                                                    <div className="packages-price">
                                                        <p>
                                                            $ 299.00
                                                            <del>$ 399.00</del>
                                                        </p>
                                                    </div>
                                                    {MoreInfoThree &&
                                                        <>
                                                            <p>more details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, placeat.</p>
                                                            <p>Orignal Price:$ 399.00</p>
                                                            <p>discount : 25%</p>
                                                            <p>after discount price:  $ 299.00</p>
                                                        </>
                                                    }
                                                    <button onClick={() => setMoreInfoThree(!MoreInfoThree)} className="btn-cart orange-bg welcome-add-cart welcome-more-info" >
                                                        {MoreInfoThree ? 'less info' : 'more info'}
                                                    </button>
                                                </div>{/*/.welcome-hero-txt */}
                                            </div>{/*/.single-welcome-hero */}
                                        </div>{/*/.col */}
                                        <div className="col-sm-5">
                                            <div className="single-welcome-hero">
                                                <div className="welcome-hero-img">
                                                    <Image layout='fixed' src={slider3} alt="slider image" />
                                                </div>{/*/.welcome-hero-txt */}
                                            </div>{/*/.single-welcome-hero */}
                                        </div>{/*/.col */}
                                    </div>{/*/.row */}
                                </div>{/*/.welcome-hero-content */}
                            </div>{/* /.container */}
                        </div>{/* /.single-slide-item */}

                    </div>{/* /.item .active */}
                </div>{/* /.carousel-inner */}

            </div>{/*/#header-carousel */}
        </>
    );
}

export default HeaderCoursel;
