import React from 'react';
import classes from './Header.module.css';
import Logo from './bycicle.svg';
const Header = () => {
    return <header className={classes.header}>
        <img  alt="text" src={Logo}/>
    </header>;
}

export default Header;