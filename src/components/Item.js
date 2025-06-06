import React from 'react'
import bike from '../images/bike.png';

const Item = ({ title, price, description, imageSrc }) => {
    return (
        <div className="item-card">
            <img src={imageSrc} alt={title} className="item-image" />

            <div className="item-header">
                <h3 className="item-title">{title}</h3>
                <p className="item-price">R$ {price}</p>
            </div>

            <p className="item-description">{description}</p>

            <div className="delivery-info">
                <h3 className="delivery-text">Delivery in 20 min</h3>
                <img src={bike} alt="bike" className="delivery-icon" />
            </div>
        </div>

    );
};

export default Item;