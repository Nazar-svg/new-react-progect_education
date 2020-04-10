import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.message}>{props.post}</div>
    )
}

export default Message;