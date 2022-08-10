import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import { startClearCart, startCloseCart } from '../actions/actions'

export const Cart = () => {

    const {productCart} = useSelector(state => state.reducer)
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(startCloseCart())
    }

    const clearCart = () => {
        dispatch(startClearCart())
    }

    return (
        <div className="cart">
            <div onClick={closeCart} className="cart__btn__close"></div>
            <div className="clr-fix"></div>
            {
                productCart.length === 0 &&
                <div>
                    <p>no product selected</p>
                </div>
            }

            <div className="clear-fix"></div>
                {productCart.map((item, idx) => (
                    <CartItem key={idx} data={item} />
                ))}

            <button onClick={clearCart} className="cart__btn__clear">
                clear
            </button>
        </div>
    )
}
