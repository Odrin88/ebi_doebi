import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Navigation from "./Navigation";
import logo from "../assets/icons/logo.svg";
import Modal from "./Modal";
import insta from "../assets/icons/inst.svg";
import vk from "../assets/icons/vk.svg";
import fl from "../assets/icons/fl.svg";
import tt from "../assets/icons/tt.svg";
import tg from "../assets/icons/tg.svg";
import Categories from './Categories';
import Cart from "./Cart";
import Promo from "./Promo";

const categoriesNames = [
    'Ланчи',
    'Наборы',
    'Роллы и суши',
    'Премиум',
    'Темпура',
    'Горячее и салаты',
    'Соусы',
    'Напитки и десерты',
    'Оформление'
];

const Header = () => {

    const [modalActive, setModalActive] = useState(false);

    
    return (
        <>
            <div className="Header">
                <Navigation/>
            </div>
            <div className="Header__container">
                <div className="Header__container__left">
                    <div className="Header__container__logo">
                        <img src={logo} alt=""/>
                        <h1 className="Header__container__title">
                            Доставка суши и роллов <br/>
                            в {'Иркутске'}
                        </h1>
                    </div>
                    <div className="Header__container__city">
                        <p className="Header__container__title">Выбери свой город</p>
                        <div className="Header__container__modal" onClick={() => setModalActive(true)}>
                            Иркутск
                        </div>
                    </div>
                </div>
                <div className="Header__container__right">
                    <div className="Header__social">
                        <img src={insta} alt="insta"/>
                        <img src={vk} alt="vk"/>
                        <img src={fl} alt="fl"/>
                        <img src={tt} alt="tt"/>
                        <img src={tg} alt="tg"/>
                    </div>
                    <div className="Header__number">
                        <Link className="Header__number__phone" to="/">
                            8 800 600 23 40
                        </Link>
                    </div>
                </div>
            </div>
            <div className="Header__promo">
                <Promo />
                <Cart />
            </div>
            <Categories items={categoriesNames}/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </>
    );
};

export default Header;
