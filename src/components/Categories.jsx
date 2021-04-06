import React from 'react';
import PropTypes from "prop-types";
import cart from "../assets/icons/basket.png";

function Categories({items}) {

    const name = items.map((item, id) =>
        <li key = {`${item}_${id}`}>
            {item}
        </li>
    );

    return (
        <div className="Categories">
            < div className="Categories__wrap">
                <ul className="Categories__wrap__main">
                    <li className="Categories__wrap__list">
                        Рекомендуем!
                    </li>
                        {name}  
                </ul>
                    <div className="Categories__btn">
                        <img src={cart} alt="cart"/>
                        <span className="Categories__btn__sum">0</span>
                        <span className="Categories__btn__rub">c</span>
                        <div className="Categories__btn__num">0</div>
                    </div>
            </div>
        </div>
    )
}

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
};

Categories.defaultProps = {
    items: [],
}


export default Categories;
