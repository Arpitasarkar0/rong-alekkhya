
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // console.log(props);

    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
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
                <h4>Total:     {total.toFixed(2)}TK.</h4>
                <h4>Delivery Charge: {DeliveryCharge}TK.</h4>
                <hr />
                <h4>Grand Total: {grandTotal.toFixed(2)}TK.</h4>
                <p>   {props.children}
                </p>
            </div>
        </div>
    );
};

export default Cart;