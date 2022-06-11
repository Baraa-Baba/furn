import React from 'react';
import soffeCollection from '../assets/images/collection/sofa-collection-banner.jpg'
import tableBanner from '../assets/images/collection/table-banner.jpg'
import dynamic from "next/dynamic";
import Image from 'next/image';
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});
const SofaCollection = () => {
    return (
        <>
            {/*sofa-collection start  */}
            <section id="sofa-collection">
                <OwlCarousel loop={true} autoplay={true} dots={false} mouseDrag={true} nav={false}
                    smartSpeed={1000} transitionStyle={'fade'} animateIn={'fadeIn'} animateOut={'fadeOutLeft'}
                    items={1}>
                    <div className="sofa-collection collectionbg1">
                        <div className='sofa-collection-img'>
                            <Image layout='fill' src={soffeCollection} alt='background image' />
                        </div>
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
                    </div>{/*/.sofa-collection */}
                    <div className="sofa-collection collectionbg2">
                        <div className='sofa-collection-img'>
                            <Image layout='fill' src={tableBanner} alt='background image' />
                        </div>
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
                    </div>{/*/.sofa-collection */}
                </OwlCarousel>
            </section>{/*/.sofa-collection */}
            {/*sofa-collection end  */}
            <style jsx>{`
            .sofa-collection-img{
    height:100vh;
    min-width: 100vw;
    position:absolute;
    z-index:-1;
}
                `}</style>
        </>
    );
}

export default SofaCollection;
