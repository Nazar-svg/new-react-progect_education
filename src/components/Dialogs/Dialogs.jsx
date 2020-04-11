import React from 'react';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Messages/Message';
import classes from './Dialogs.module.css';

const Dialogs = ({ state }) => {

    const dialogsElements = state.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);

    const messagesElement = state.messages
        .map(message => <Message key={message.id} post={message.post} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs;