import React from 'react';
import PropTypes from "prop-types";
import Filters from "./Filters";

const Categories = ({items}) => {

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
                    <Filters />
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
