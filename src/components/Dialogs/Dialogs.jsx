import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from  "react-router-dom";
const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs/1">Nazar</NavLink>
               </div>
                <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs/2">Dima</NavLink>
               </div>
                <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs/3">Angelina</NavLink>
               </div>
                <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs/4">Swetik</NavLink>
               </div>
                <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs/5">Yosuf</NavLink>
               </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi!!</div>
                <div className={classes.message}>What you doing todey?</div>
                <div className={classes.message}>hey</div>
            </div>
        </div>
    )

}
export default Dialogs;