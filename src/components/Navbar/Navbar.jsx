import React from 'react';
import classes from './Navbar.module.css';
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
        <div className={classes.panel}>
          <div>
          <div className={`${classes.circle} ${classes.circleActive}`}></div>
          <a className={classes.name}>Dima</a>
            </div>
            <div>
          <div className={`${classes.circle} ${classes.circleActive}`}></div>
            <a className={classes.name}>Vitaliy</a>
            </div>
            <div>
          <div className={`${classes.circle} ${classes.circleActive}`}></div>
            <a className={classes.name}>Yura</a>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;