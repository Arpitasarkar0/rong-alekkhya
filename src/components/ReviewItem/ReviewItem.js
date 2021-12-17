
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { name, price, quantity, key, img } = props.product;
    const { handleRemove } = props;

    return (
        <div className="review-product">
            {/* <div >
                <img className='product-recview-img' src={img} alt="" />
            </div> */}
            <div>
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;