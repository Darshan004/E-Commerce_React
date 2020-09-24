import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../Assets/4.3 crown.svg'

const Header =  () => (
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
            <Link className = 'option' to= "/signin">
                Sign-In
            </Link>
        </div>
    </div>
) 

export default Header;