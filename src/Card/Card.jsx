import image from "./assets/images/1.png"
import "./Card.css"

const Card = ({product}) => {
    return (
        <div className="card">
            <p className={'title'}>{product?.category}</p>
            <p className={'product_name'}>{product.title.slice(0,15)}...</p>
            <img className={'card_image'} src={product?.image ? product?.image : image} alt=""/>
            <div className="price_section">
                <p className={'discount_price'}>RS 60.000</p>
                <p className={'price'}>RS{product?.price}</p>
            </div>
            <button className={'btn add_to_cart'}>Add to cart</button>
        </div>
    );
};

export default Card;
