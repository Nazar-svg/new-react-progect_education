const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'what, you doing?', likesCount: '7' },
                { id: 2, message: 'what, you problem?', likesCount: '12' }
            ],
            newPostsText: ""
        },
        dialogPage: {
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
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Nazar' },
                { id: 2, name: 'Dima' },
                { id: 3, name: 'Angelina' },
            ]
        }

        
    },
    getState() {
        return this._state;
    },
    _callSubscraiber() {
        console.log('exchange rerender');
    },
    subscribe(observer) {
        this._callSubscraiber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: Math.random(),
                message: this._state.profilePage.newPostsText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostsText = "";
            this._callSubscraiber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostsText = action.newText;
            this._callSubscraiber(this._state);
        }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscraiber(this._state);
        }else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody = "";
            this._state.dialogPage.messages.push({ id: Math.random(), post: body })
            this._callSubscraiber(this._state);
        }
    }
}

export const addPostActionCreater = () => ( { type: ADD_POST });
export const updateNewPostTextActionCreater = (Text) => 
 ({type: UPDATE_NEW_POST_TEXT, newText: Text });

 export const sendMessageCreater = () => ( { type: SEND_MESSAGE});
export const updateNewMessageBodyCreater = (body) => 
 ({type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;
window.store = store;