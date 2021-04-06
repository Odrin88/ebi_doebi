import React from 'react'

const Filters = () => {
    return (
        <div className="Filter">
            <div className="Filter__title">Фильтр</div>
            <div onClick={() => alert('Hello')} className="Filter__burger">
                <div  className="Filter__burger__container">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Filters;
