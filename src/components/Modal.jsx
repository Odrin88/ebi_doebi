import React from 'react';
import { Link } from 'react-router-dom';
import modalLogo from '../assets/icons/logo.svg'


const Modal = ({active, setActive}) => {


    return (
        <div className={active ? "Modal active" : "Modal"} onClick={() => setActive(false)}>
            <div className={active ? "Modal__content active" : "Modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="Modal__content__head">
                    <div className="Modal__content__img">
                        <img src={modalLogo} alt=""/>
                    </div>
                    <div className="Modal__content__title">
                        <p>Выбери свой город</p>
                    </div>
                </div>
                <div className="Modal__search">
                    <input type="text" placeholder="Поиск города"/>
                </div>
                <div className="Modal__wrapper">
                    <div className="Modal__wrapper__city">
                    <Link to="">Москва</Link>
                    <Link to="">Санкт-Петербург</Link>
                    <Link to="">Красноярск</Link>
                    <Link to="">Алматы</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Modal;
