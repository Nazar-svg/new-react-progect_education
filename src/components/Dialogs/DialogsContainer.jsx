import React from 'react';
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreater());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreater(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;