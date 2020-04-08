import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Messadge = (props) => {
    return (
        <div className={classes.message}>{props.post}</div>
    )
}
const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Nazar' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Angelina' },
        { id: 4, name: 'Svetik' },
        { id: 5, name: 'Yosuf' }
    ];
    let messagesData = [
        { id: 1, post: 'Hi!!' },
        { id: 2, post: 'What you doing todey?' },
        { id: 3, post: 'Yo' },
        { id: 4, post: 'Yo' }
    ];
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={classes.messages}>
                <Messadge post={messagesData[0].post} />
                <Messadge post={messagesData[1].post} />
                <Messadge post={messagesData[2].post} />
                <Messadge post={messagesData[3].post} />
            </div>
        </div>
    )
}
export default Dialogs;