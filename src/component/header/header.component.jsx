import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../Assets/4.3 crown.svg'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header =  ({currentUser, hidden}) => (
    <div className = 'header'>
        <Link className = 'logo-container' to = "/">
            <Logo className = 'logo' />
        </Link>
        <div className = 'options'>
            <Link className = 'option' to= "/shop">
                Shop
            </Link>
            <Link className = 'option' to= "/shop">
                Contact
            </Link>
            {
                currentUser ?
                <div className = 'option' onClick={() => auth.signOut()}>
                    Sign Out
                </div>
                :
                <Link className = 'option' to= "/signin">
                    Sign In
                </Link>
            }
            <CartIcon/>
        </div>
        { 
            hidden ? null : 
            <CartDropdown />
        }
    </div>
) ;

const mapStatetoProps = state => ({ user: {currentUser}, cart: {hidden} }) => ({
    currentUser,
    hidden
});

export default connect(mapStatetoProps)(Header);