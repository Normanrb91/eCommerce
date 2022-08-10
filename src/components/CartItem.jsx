import React from 'react'

export const CartItem = ({data}) => {
    return (
        <div className="cart-item">
            <div className="cart-item__info">
                <div className="cart-item__info__name">
                    {data?.name}
                </div>
                <div className="cart-item__info__price">
                    {`$${data?.price}`}
                </div>
            </div>
            <div className="cart-item__image">
                <img src={data?.image?.src} alt={data?.image?.alt}/>
            </div>
        </div>
    )
}
