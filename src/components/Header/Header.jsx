import React from 'react';
import classes from './Header.module.css';
import Logo from './bycicle.svg';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={classes.header}>
        <img alt="text" src={Logo} />
        <div className={classes.loginBlock} >
            {props.isAuth ? props.login
           : <NavLink to={'/login'} >Login</NavLink>}
        </div>
    </header>;
}

export default Header;