import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cart } from './Cart'
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import '../styles/Header.css'
import { startCloseCart, startOpenCart } from '../actions/actions'


export const Navbar = () => {

    const {cartVisible, productCart} = useSelector(state => state.reducer)
    const dispatch = useDispatch()

    const toggleCart = () => {
        if(cartVisible) dispatch(startCloseCart())
        else dispatch(startOpenCart())
    }

    return (
        <div className="nav-container">

            <img height={20} width={124} src={logo} alt="logo"/>
      
            <div className="nav-container-cart">
               
               { productCart.length > 0 &&
                <span className="nav-cart-quantity" onClick={toggleCart}>
                    {productCart.length}
                </span>
               }

                <div className="nav-cart-icon" onClick={toggleCart} >
                    <img width={52} height={38} src={cart} alt="cart"/>
                </div>
            
            { cartVisible && <Cart /> }
            </div>

           
        </div>
    )
}
