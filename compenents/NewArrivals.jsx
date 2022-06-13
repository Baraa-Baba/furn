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

import SingleNewArrival from './SingleNewArrival';
// Fetching data from the JSON file


const NewArrivals = ({ props }) => {

    const products = props.products;
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
                            {products.map(product =>
                                <div key={product.id}>
                                    <SingleNewArrival product={product} />
                                </div>)}
                        </div>
                    </div>
                </div>{/*/.container */}

            </section>{/*/.new-arrivals */}
            {/*new-arrivals end  */}
        </>
    );
}

export default NewArrivals;
