import React from 'react';
import classes from './Message.module.css';


const Message = ({post}) => {
    return (
        <div className={classes.message}>{post}</div>       
    )
}

export default Message;