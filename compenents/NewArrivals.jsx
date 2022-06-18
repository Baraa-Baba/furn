import React from 'react';

import SingleNewArrival from './SingleNewArrival';
import SearchProducts from './SearchProducts';
const NewArrivals = ({ products, setproducts, cartlist, setcartlist }) => {
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
                            <SearchProducts products={products} setproducts={setproducts} cartlist={cartlist}
                                setcartlist={setcartlist} />
                        </div>
                    </div>
                </div>{/*/.container */}

            </section>{/*/.new-arrivals */}
            {/*new-arrivals end  */}
        </>
    );
}

export default NewArrivals;
