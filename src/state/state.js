let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'what, you doing?', likesCount: '7' },
                { id: 2, message: 'what, you problem?', likesCount: '12' }
            ],
            newPostsText: "",
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
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: Math.random(),
                message: this._state.profilePage.newPostsText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostsText = "";
            this._callSubscraiber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostsText = action.newText;
            this._callSubscraiber(this._state);
        }
    }
}


export default store;
window.store = store;