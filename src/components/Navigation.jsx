import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="Navigation">
            <ul className="Navigation__menu">
                <Link to="/">
                    <li className="Navigation__menu__item">Вход</li>
                </Link>
                <Link to="/">
                    <li>О компании</li>
                </Link>
                <Link to="/">
                    <li>Доставка</li>
                </Link>
                <Link to="/">
                    <li>Акции</li>
                </Link>
                <Link to="/">
                    <li>Франшиза</li>
                </Link>
                <Link to="/">
                    <li>Написать директору</li>
                </Link>

            </ul>
        </div>
    );
};

export default Navigation;
