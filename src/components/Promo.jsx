import React from 'react'

const Promo = () => {
    return (
        <div className="Promo">
            <form className="Promo__form">
                <input className="Promo__form__cod" type="text" name="name" placeholder="Промокод"/>
                <input className="Promo__form__btn" type="submit" value="Применить" />
            </form>
        </div>
    )
}

export default Promo
