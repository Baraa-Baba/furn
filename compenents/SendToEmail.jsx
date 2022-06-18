import React from 'react';
const SendToEmail = ({ cartlist }) => {
    return (
        <>
            <form action="https://formsubmit.co/kennullsec@gmail.com" method="POST">
                {cartlist.map((product, i) =>

                    <div key={product.id}>
                        <input type="hidden" value={product.title} name={`product-title${i}`}
                            required />
                        <input type="hidden" value={product.id} name={`product-id${i}`}
                            required />
                        <input type="hidden" value={product.quantity} name={`product-quantity${i}`}
                            required />
                        <input type="hidden" value={product.imageUrl}
                            name={`product-image-path${i}`}
                            required />
                        <input type="hidden" value={product.orignalPrice}
                            name={`product-orignal-Price${i}`}
                            required />
                        <input type="hidden" value={product.discount}
                            name={`product-discount${i}`}
                            required />
                        <input type="hidden" value={product.orignalPrice - (product.discount / 100 * product.orignalPrice)}
                            name={`product-unit-price${i}`}
                            required />
                        <input type="hidden" value={(product.orignalPrice - (product.discount / 100 * product.orignalPrice)) * product.quantity}
                            name={`product-total-price${i}`}
                            required />
                        <input type="hidden" value={product.sale}
                            name={`product-sale${i}`}
                            required />
                        <input type="hidden" value={product.bg}
                            name={`product-bg${i}`}
                            required />
                    </div>
                )}

                <button id='send-email' type="submit">Send</button>
                <style jsx>{`
                    #send-email{
                        color:white;
                        font-size:5rem;
                        border:3px solid white;
                        border-radius:9999px;
                        padding:1rem 3rem 1rem 3rem;
                        position:absolute;
                        bottom:0;
                        right:3rem;
                    }
                    #send-email:hover{
                        color:blue;
                        border:3px solid blue;
                    }
                    `}</style>
            </form>
        </>
    );
}

export default SendToEmail;
