const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, { id: Math.random(), post: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreater = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreater = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;