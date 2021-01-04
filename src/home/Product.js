import React from 'react'
import fire from '../img/fire.svg';
import './Product.css';
import {useStateValue} from "../StateProvider/StateProvider"


function Product({ id, title, image, description, price , hot}) {
    //dispatch -> how we manipulate with data
    const [{basket}, dispatch] = useStateValue();

    console.log("this is the basket ===>", basket);

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                image: image,
                description: description,
                price: price,
                hot: hot
            },
        })
    }
    
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>{description}</small>
                    <strong>₩{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(hot)
                    .fill()
                    .map((_, i) => (
                        <p>
                        <img src={fire} alt=""/>
                        </p>
                    ))}
                </div>
            </div>

            <img className="product__img" src={image} alt=""/>
            <button onClick={addToBasket}>Add to the List</button>
        </div>
    )
}

export default Product;