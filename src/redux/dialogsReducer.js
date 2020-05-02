const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState =  {
    dialogs: [
        { id: 1, name: 'Nazar' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Angelina' },
        { id: 4, name: 'Svetik' },
        { id: 5, name: 'Yosuf' }
    ],
    messages: [
        { id: 2, post: 'What you doing todey?' },
    ],
    newMessageText: ""
}
const dialogsReducer = (state = initialState, action) => {
    const stateCopy = {...state,
        messages: [...state.messages],
        dialogs: [...state.dialogs]
    };
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        case SEND_MESSAGE:{
            stateCopy.messages.push({ id: Math.random(), post: body });
            let body = state.newMessageBody;
            stateCopy.newMessageBody = "";
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreater = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreater = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;