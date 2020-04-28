import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscraiber(this._state);

    }
}

export default store;
window.store = store;