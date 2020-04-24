import React from 'react';
import classes from './Navbar.module.css';
import Friends from './Frend/Friend';
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activLink}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.activLink}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.activLink}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.activLink}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/seting" activeClassName={classes.activLink}>Seting</NavLink>
      </div>
      <div className={`${classes.item} ${classes.lastItem}`}>
        <NavLink to="/friends" activeClassName={classes.activLink}>Friends</NavLink>
        {/* <Friends /> */}
      </div>
    </nav>
  );
}

export default Navbar;