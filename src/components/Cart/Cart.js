import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        console.log(total);
        totalQuantity = totalQuantity + product.quantity;
    }

    const DeliveryCharge = 99;
    const grandTotal = total + DeliveryCharge;
    return (
        <div>
            <div className='order-summary'>
                <h3>Order Summary</h3>
                <h5>Items Ordered: {totalQuantity}</h5>

            </div>

            <div className='total'>
                <h4>Total:     {total}TK.</h4>
                <h4>Delivery Charge: {DeliveryCharge}TK.</h4>
                <hr />
                <h4>Grand Total: {grandTotal}TK.</h4>

            </div>
        </div>
    );
};

export default Cart;