import React from 'react';
import  { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectos';
import CustomButtom from '../custom-button/custom-button.component';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { 
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButtom onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>Go to Checkout</CustomButtom>
    </div>
)

const mapStateToPros = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToPros)(CartDropDown)); 