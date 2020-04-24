import React from 'react';
import classes from './Message.module.css';

const Message = ({post}) => {

    return (<div>
        <div className={classes.message}>{post}</div>
        <div>
            <textarea
            ></textarea>
        </div>
        <button className={classes.button}
        >Add Message</button>
    </div>
    )
}

export default Message;