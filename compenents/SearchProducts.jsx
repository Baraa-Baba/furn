import React, { useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import SingleNewArrival from './SingleNewArrival';
const SearchProducts = ({ products, setproducts, cartlist, setcartlist }) => {
    const [searchInput, setsearchInput] = useState('')
    function handleChange(event) {
        setsearchInput(event.target.value)
        var input = event.target.value
        var products_tmp = products
        products_tmp.map(function (product) {
            if (input != '') {
                var input_lowercase = input.toLowerCase()
                var titleLower = product.title.toLowerCase()
                var Id_str = product.id + ''
                var unitprice = product.orignalPrice - (product.discount / 100 * product.orignalPrice)
                var unitprice_str = unitprice + ''
                var quantity_str = product.quantity + ''
                if (Id_str.includes(input_lowercase) || titleLower.includes(input_lowercase) ||
                    quantity_str.includes(input_lowercase) || unitprice_str.includes(input_lowercase)
                    || ("sale".includes(input_lowercase) && product.sale == true)
                ) {
                    product.isvisible = true
                } else {
                    product.isvisible = false
                }
            } else {
                product.isvisible = true
            }
        })
        console.log(products_tmp)
        setproducts(products_tmp)
        console.log(products)
    }
    return (
        <>
            <input className='search-input' placeholder='search' type={'text'} onChange={(e) => handleChange(e)} value={searchInput} />
            <p> {searchInput} </p>
            {products.map(product =>
                <div key={product.id}>
                    <SingleNewArrival cartlist={cartlist} setcartlist={setcartlist} product={product} products={products} setproducts={setproducts} />
                </div>)}
            <style jsx>{`
                .search-input{
                    font-size:3rem
                }
                    .show-button{
                        margin:0 auto 0 auto;
                        font-size:3rem ;
                        border:3px solid black;
                        color:rgb(233,156,46)
                    }
                    .show-button:hover{
                          border:3px solid black;
                        color:rgb(233,156,46)                    }
                    `}</style>
        </>
    );
}

export default SearchProducts;