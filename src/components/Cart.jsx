import React from 'react';
import cart from "../assets/icons/basket.png";

const Cart = () => {
    return (
        <div className="Cart">
            <div className="Cart__btn">
                <img src={cart} alt="cart"/>
                <span className="Cart__btn__sum">0</span>
                <span className="Cart__btn__rub">c</span>
                <div className="Cart__btn__num">0</div>
            </div>
        </div>
    )
}

export default Cart;
