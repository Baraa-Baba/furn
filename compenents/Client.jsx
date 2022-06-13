import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import c1 from '../assets/images/clients/c1.png'
import c2 from '../assets/images/clients/c2.png'
import c3 from '../assets/images/clients/c3.png'
import c4 from '../assets/images/clients/c4.png'
import c5 from '../assets/images/clients/c5.png'

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});
const Client = () => {
    return (
        <>

            {/* clients strat  */}
            <section id="clients" className="clients">
                <div className="container">
                    <OwlCarousel smartSpeed={1000} nav={false}
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
                        autoplayHoverPause={true} items={5}  >
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
        </>
    );
}

export default Client;
