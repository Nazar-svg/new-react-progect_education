import React from 'react';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Messages/Message';
import classes from './Dialogs.module.css';

const Dialogs = ({ state, store, dispatch, updateNewMessageBody, sendMessage }) => {

    const dialogsElements = state.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);

    const messagesElement = state.messages
        .map(message => <Message
            dispatch={dispatch}
            store={store}
            state={state}
            key={message.id}
            post={message.post}
        />);
    let newMessageBody = state.newMessageBody;
    const onSendMessageClick = () => {
        sendMessage();
    }
    const onChangeMessadeClick = (e) => {
        const body = e.target.value;
        updateNewMessageBody(body);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}
                <textarea
                    value={newMessageBody}
                    placeholder="Enter Your Message"
                    onChange={onChangeMessadeClick}
                ></textarea>
                <div>
                    <button onClick={onSendMessageClick}
                        className={classes.button} >Send Message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;