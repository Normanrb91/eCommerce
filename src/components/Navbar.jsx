import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cart } from './Cart'
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import { startCloseCart, startOpenCart } from '../actions/actions'


export const Navbar = () => {

    const {cartVisible, productCart} = useSelector(state => state.reducer)
    const dispatch = useDispatch()

    const toggleCart = () => {
        if(cartVisible) dispatch(startCloseCart())
        else dispatch(startOpenCart())
    }

    return (
        <div className="navbar">

            <img className="navbar__img" src={logo} alt="logo"/>
      
            <div className="navbar__cart__container">
               
               { productCart.length > 0 &&
                <span className="navbar__quantity" onClick={toggleCart}>
                    {productCart.length}
                </span>
               }

                <div className="navbar__icon" onClick={toggleCart} >
                    <img src={cart} alt="cart"/>
                </div>
            
            { cartVisible && <Cart /> }
            </div>

           
        </div>
    )
}
