import React from 'react';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Messages/Message';
import classes from './Dialogs.module.css';
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialogsReducer';

const Dialogs = ({ state, store, dispatch }) => {

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
        dispatch(sendMessageCreater());
    }
    const onChangeMessadeClick = (e) => {
        const body = e.target.value;
        dispatch(updateNewMessageBodyCreater(body));
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