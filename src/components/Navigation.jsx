import React from 'react';
import {Link, Router} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="Navigation">
            <ul className="Navigation__menu">
                <Router>
                    <Link to="/">
                        <li className="Navigation__menu__item">Вход</li>
                    </Link>
                    <li>О компании</li>
                    <li>Доставка</li>
                    <li>Акции</li>
                    <li>Франшиза</li>
                    <li>Написать директору</li>
                </Router>

            </ul>
        </div>
    );
};

export default Navigation;
