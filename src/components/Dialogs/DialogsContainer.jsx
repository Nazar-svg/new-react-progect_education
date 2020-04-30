import React from 'react';
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({ state, store, dispatch }) => {

    const onSendMessageClick = () => {
        dispatch(sendMessageCreater());
    }
    const onChangeMessadeClick = (body) => {

        dispatch(updateNewMessageBodyCreater(body));
    }
    return (
        < Dialogs updateNewMessageBody={onChangeMessadeClick} sendMessage={onSendMessageClick} state={state} />
    )

}
export default DialogsContainer;