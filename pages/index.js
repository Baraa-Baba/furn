/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import Navbar from '../compenents/Navbar'


import arrivals1 from '../assets/images/collection/arrivals1.png'
import arrivals2 from '../assets/images/collection/arrivals2.png'
import arrivals3 from '../assets/images/collection/arrivals3.png'
import arrivals4 from '../assets/images/collection/arrivals4.png'
import arrivals5 from '../assets/images/collection/arrivals5.png'
import arrivals6 from '../assets/images/collection/arrivals6.png'
import arrivals7 from '../assets/images/collection/arrivals7.png'
import arrivals8 from '../assets/images/collection/arrivals8.png'

import slider1 from '../assets/images/slider/slider1.png'
import slider2 from '../assets/images/slider/slider2.png'
import slider3 from '../assets/images/slider/slider3.png'


import p1 from '../assets/images/populer-products/p1.png'
import p2 from '../assets/images/populer-products/p2.png'
import p3 from '../assets/images/populer-products/p3.png'

import f1 from "../assets/images/features/f1.jpg"
import f2 from "../assets/images/features/f2.jpg"
import f3 from "../assets/images/features/f3.jpg"
import f4 from "../assets/images/features/f4.jpg"

import b1 from "../assets/images/blog/b1.jpg"
import b2 from "../assets/images/blog/b2.jpg"
import b3 from "../assets/images/blog/b3.jpg"

import c1 from '../assets/images/clients/c1.png'
import c2 from '../assets/images/clients/c2.png'
import c3 from '../assets/images/clients/c3.png'
import c4 from '../assets/images/clients/c4.png'
import c5 from '../assets/images/clients/c5.png'


import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Head>

        {/*meta data*/}
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}

        {/* title of site*/}
        <title>Furniture</title>

        {/* For favicon png*/}
        <link rel="icon" href="/favicon.png" />
        {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries*/}
        {/* WARNING: Respond.js doesn't work if you view the page via file://*/}

        {/*[if lt IE 9]>
			<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        [endif]*/}

      </Head>
      <div>

        {/*[if lte IE 9]>
            <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif] */}



        {/*welcome-hero start  */}
        <header id="home" className="welcome-hero">

          <Navbar />
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
                              <button className="btn-cart welcome-add-cart" >
                                <span className="lnr lnr-plus-circle"></span>
                                add <span>to</span> cart
                              </button>
                              <button className="btn-cart welcome-add-cart welcome-more-info" >
                                more info
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
                              <button className="btn-cart welcome-add-cart" >
                                <span className="lnr lnr-plus-circle"></span>
                                add <span>to</span> cart
                              </button>
                              <button className="btn-cart welcome-add-cart welcome-more-info" >
                                more info
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
                              <button className="btn-cart welcome-add-cart" >
                                <span className="lnr lnr-plus-circle"></span>
                                add <span>to</span> cart
                              </button>
                              <button className="btn-cart welcome-add-cart welcome-more-info" >
                                more info
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

          {/* top-area Start  */}
          <div className="top-area">
            <div className="header-area">
            </div>{/*/.header-area */}
            <div className="clearfix"></div>

          </div>{/* /.top-area */}
          {/* top-area End  */}

        </header>{/*/.welcome-hero */}
        {/*welcome-hero end  */}

        {/*populer-products start  */}
        <section id="populer-products" className="populer-products">
          <div className="container">
            <div className="populer-products-content">
              <div className="row">
                <div className="col-md-3">
                  <div className="single-populer-products">
                    <div className="single-populer-product-img mt40">
                      <Image layout="fixed" src={p1} alt="populer-products images" />
                    </div>
                    <h2><a href="#">arm chair</a></h2>
                    <div className="single-populer-products-para">
                      <p>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-populer-products">
                    <div className="single-inner-populer-products">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="single-inner-populer-product-img">
                            <Image layout="fixed" src={p2} alt="populer-products images" />
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                          <div className="single-inner-populer-product-txt">
                            <h2>
                              <a href="#">
                                latest designed stool <span>and</span> chair
                              </a>
                            </h2>
                            <p>
                              Edi ut perspiciatis unde omnis iste natusina error sit voluptatem accusantium doloret mque laudantium, totam rem aperiam.
                            </p>
                            <div className="populer-products-price">
                              <h4>Sales Start from <span>$99.00</span></h4>
                            </div>
                            <button className="btn-cart welcome-add-cart populer-products-btn" >
                              discover more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="single-populer-products">
                    <div className="single-populer-products">
                      <div className="single-populer-product-img">

                        <Image layout="fixed" src={p3} alt="populer-products images" />
                      </div>
                      <h2><a href="#">hanging lamp</a></h2>
                      <div className="single-populer-products-para">
                        <p>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{/*/.container */}

        </section>{/*/.populer-products */}
        {/*populer-products end */}

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

        {/*sofa-collection start  */}
        <section id="sofa-collection">
          <div className="owl-carousel owl-theme" id="collection-carousel">
            <div className="sofa-collection collectionbg1">
              <div className="container">
                <div className="sofa-collection-txt">
                  <h2>unlimited sofa collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="sofa-collection-price">
                    <h4>strting from <span>$ 199</span></h4>
                  </div>
                  <button className="btn-cart welcome-add-cart sofa-collection-btn" >
                    view more
                  </button>
                </div>
              </div>
            </div>{/*/.sofa-collection */}
            <div className="sofa-collection collectionbg2">
              <div className="container">
                <div className="sofa-collection-txt">
                  <h2>unlimited dainning table collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="sofa-collection-price">
                    <h4>strting from <span>$ 299</span></h4>
                  </div>
                  <button className="btn-cart welcome-add-cart sofa-collection-btn" >
                    view more
                  </button>
                </div>
              </div>
            </div>{/*/.sofa-collection */}
          </div>{/*/.collection-carousel */}

        </section>{/*/.sofa-collection */}
        {/*sofa-collection end  */}

        {/*feature start  */}
        <section id="feature" className="feature">
          <div className="container">
            <div className="section-header">
              <h2>featured products</h2>
            </div>{/*/.section-header */}
            <div className="feature-content">
              <div className="row">
                <div className="col-sm-3">
                  <div className="single-feature">
                    <div className='feature-image'>
                      <Image layout='fixed' src={f1} alt="feature image" />
                    </div>
                    <div className="single-feature-txt text-center">
                      <p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
                        <span className="feature-review">(45 review)</span>
                      </p>
                      <h3><a href="#">designed sofa</a></h3>
                      <h5>$160.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="single-feature">
                    <div className='feature-image'>
                      <Image layout='fixed' src={f2} alt="feature image" />
                    </div>
                    <div className="single-feature-txt text-center">
                      <p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
                        <span className="feature-review">(45 review)</span>
                      </p>
                      <h3><a href="#">dinning table </a></h3>
                      <h5>$200.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="single-feature">
                    <div className='feature-image'>
                      <Image layout='fixed' src={f3} alt="feature image" />
                    </div>
                    <div className="single-feature-txt text-center">
                      <p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
                        <span className="feature-review">(45 review)</span>
                      </p>
                      <h3><a href="#">chair and table</a></h3>
                      <h5>$100.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="single-feature">
                    <div className='feature-image'>
                      <Image layout='fixed' src={f4} alt="feature image" />
                    </div>
                    <div className="single-feature-txt text-center">
                      <p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
                        <span className="feature-review">(45 review)</span>
                      </p>
                      <h3><a href="#">modern arm chair</a></h3>
                      <h5>$299.00</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{/*/.container */}

        </section>{/*/.feature */}
        {/*feature end  */}

        {/*blog start  */}
        <section id="blog" className="blog">
          <div className="container">
            <div className="section-header">
              <h2>latest blog</h2>
            </div>{/*/.section-header */}
            <div className="blog-content">
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <div className='blog-image-cont'>
                        <Image layout='fixed' src={b1} alt="blog image" />
                      </div>
                      <div className="single-blog-img-overlay"></div>
                    </div>
                    <div className="single-blog-txt">
                      <h2><a href="#">Why Brands are Looking at Local Language</a></h2>
                      <h3>By <a href="#">Robert Norby</a> / 18th March 2018</h3>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt....
                      </p>
                    </div>
                  </div>

                </div>
                <div className="col-sm-4">
                  <div className="single-blog">
                    <div className="single-blog-img">

                      <div className='blog-image-cont'>
                        <Image layout='fixed' src={b2} alt="blog image" />
                      </div>
                      <div className="single-blog-img-overlay"></div>
                    </div>
                    <div className="single-blog-txt">
                      <h2><a href="#">Why Brands are Looking at Local Language</a></h2>
                      <h3>By <a href="#">Robert Norby</a> / 18th March 2018</h3>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt....
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-blog">
                    <div className="single-blog-img">

                      <div className='blog-image-cont'>
                        <Image layout='fixed' src={b3} alt="blog image" />
                      </div>
                      <div className="single-blog-img-overlay"></div>
                    </div>
                    <div className="single-blog-txt">
                      <h2><a href="#">Why Brands are Looking at Local Language</a></h2>
                      <h3>By <a href="#">Robert Norby</a> / 18th March 2018</h3>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{/*/.container */}

        </section>{/*/.blog */}
        {/*blog end  */}

        {/* clients strat  */}
        <section id="clients" className="clients">
          <div className="container">
            <OwlCarousel loop={true} smartSpeed={1000}
              autoplay={true}
              dots={false}
              responsive={
                {
                  0: {
                    items: 2
                  },
                  415: {
                    items: 3
                  },
                  600: {
                    items: 3

                  },
                  1200: {
                    items: 5
                  }
                }
              }
              autoplayHoverPause={true} items={5} >
              <div className="item">
                <a href="#">
                  <Image layout='fixed' src={c1} alt="feature image" />
                </a>
              </div>{/*/.item */}
              <div className="item">
                <a href="#">
                  <Image layout='fixed' src={c2} alt="brand-image" />
                </a>
              </div>{/*/.item */}
              <div className="item">
                <a href="#">
                  <Image layout='fixed' src={c3} alt="brand-image" />
                </a>
              </div>{/*/.item */}
              <div className="item">
                <a href="#">
                  <Image layout='fixed' src={c4} alt="brand-image" />
                </a>
              </div>{/*/.item */}
              <div className="item">
                <a href="#">
                  <Image layout='fixed' src={c5} alt="brand-image" />
                </a>
              </div>{/*/.item */}
            </OwlCarousel>

          </div>{/*/.container */}

        </section>{/*/.clients */}
        {/* clients end  */}

        {/*newsletter strat  */}
        <section id="newsletter" className="newsletter">
          <div className="container">
            <div className="hm-footer-details">
              <div className="row">
                <div className=" col-md-3 col-sm-6 col-xs-12">
                  <div className="hm-footer-widget">
                    <div className="hm-foot-title">
                      <h4>information</h4>
                    </div>{/*/.hm-foot-title */}
                    <div className="hm-foot-menu">
                      <ul>
                        <li><a href="#">about us</a></li>{/*/li */}
                        <li><a href="#">contact us</a></li>{/*/li */}
                        <li><a href="#">news</a></li>{/*/li */}
                        <li><a href="#">store</a></li>{/*/li */}
                      </ul>{/*/ul */}
                    </div>{/*/.hm-foot-menu */}
                  </div>{/*/.hm-footer-widget */}
                </div>{/*/.col */}
                <div className=" col-md-3 col-sm-6 col-xs-12">
                  <div className="hm-footer-widget">
                    <div className="hm-foot-title">
                      <h4>collections</h4>
                    </div>{/*/.hm-foot-title */}
                    <div className="hm-foot-menu">
                      <ul>
                        <li><a href="#">wooden chair</a></li>{/*/li */}
                        <li><a href="#">royal cloth sofa</a></li>{/*/li */}
                        <li><a href="#">accent chair</a></li>{/*/li */}
                        <li><a href="#">bed</a></li>{/*/li */}
                        <li><a href="#">hanging lamp</a></li>{/*/li */}
                      </ul>{/*/ul */}
                    </div>{/*/.hm-foot-menu */}
                  </div>{/*/.hm-footer-widget */}
                </div>{/*/.col */}
                <div className=" col-md-3 col-sm-6 col-xs-12">
                  <div className="hm-footer-widget">
                    <div className="hm-foot-title">
                      <h4>my accounts</h4>
                    </div>{/*/.hm-foot-title */}
                    <div className="hm-foot-menu">
                      <ul>
                        <li><a href="#">my account</a></li>{/*/li */}
                        <li><a href="#">wishlist</a></li>{/*/li */}
                        <li><a href="#">Community</a></li>{/*/li */}
                        <li><a href="#">order history</a></li>{/*/li */}
                        <li><a href="#">my cart</a></li>{/*/li */}
                      </ul>{/*/ul */}
                    </div>{/*/.hm-foot-menu */}
                  </div>{/*/.hm-footer-widget */}
                </div>{/*/.col */}
                <div className=" col-md-3 col-sm-6  col-xs-12">
                  <div className="hm-footer-widget">
                    <div className="hm-foot-title">
                      <h4>newsletter</h4>
                    </div>{/*/.hm-foot-title */}
                    <div className="hm-foot-para">
                      <p>
                        Subscribe  to get latest news,update and information.
                      </p>
                    </div>{/*/.hm-foot-para */}
                    <div className="hm-foot-email">
                      <div className="foot-email-box">
                        <input type="text" className="form-control" placeholder="Enter Email Here...." />
                      </div>{/*/.foot-email-box */}
                      <div className="foot-email-subscribe">
                        <span><i className="fa fa-location-arrow"></i></span>
                      </div>{/*/.foot-email-icon */}
                    </div>{/*/.hm-foot-email */}
                  </div>{/*/.hm-footer-widget */}
                </div>{/*/.col */}
              </div>{/*/.row */}
            </div>{/*/.hm-footer-details */}

          </div>{/*/.container */}

        </section>{/*/newsletter */}
        {/*newsletter end  */}

        {/*footer start */}
        <footer id="footer" className="footer">
          <div className="container">
            <div className="hm-footer-copyright text-center">
              <div className="footer-social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-pinterest"></i></a>
                <a href="#"><i className="fa fa-behance"></i></a>
              </div>
              <p>
                &copy;copyright. designed and developed by <a href="https://www.themesine.com/">themesine</a>
              </p>{/*/p */}
            </div>{/*/.text-center */}
          </div>{/*/.container */}

          <div id="scroll-Top">
            <div className="return-to-top">
              <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
            </div>

          </div>{/*/.scroll-Top */}

        </footer>{/*/.footer */}
        {/*footer end */}

        {/* Include all js compiled plugins (below), or include individual files as needed  */}


        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <Script type="text/javascript" src="/static/bootstrap.min.js"></Script>
        {/*modernizr.min.js */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></Script>
        <Script type="text/javascript" src="/static/custom.js"></Script>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <Script type="text/javascript" src="/static/bootstrap.min.js"></Script>
        {/*modernizr.min.js */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></Script>
        <Script type="text/javascript" src="/static/custom.js"></Script>

      </div>
    </div >
  )
}
