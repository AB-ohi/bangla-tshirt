import React from 'react';
import './TShirt.css'

const TShirt = ({TShirt,handelAddToCart}) => {
    const {picture, name, price, gender}= TShirt
    return (
        <div className='T-shirt'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>price: ${price}</p>
            <button onClick={() => handelAddToCart(TShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;