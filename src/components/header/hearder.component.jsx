import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectos';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP </OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            { currentUser ?
                <OptionLink to='/profile'>
                    MY PROFILE
                </OptionLink>
                :
                ''
            }
            { currentUser ?
                <OptionLink as='div' onClick={signOutStart}>
                    SIGN OUT
                </OptionLink>
                : <OptionLink to='/signin'>SIGN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {hidden ? null : <CartDropDown/>}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);