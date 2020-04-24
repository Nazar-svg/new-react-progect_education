let renderEntireTree = () =>{
    console.log('exchange rerender');
}
let state = {
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
}
export const addPost = () => {

    const newPost = {
        id: Math.random(),
        message: state.profilePage.newPostsText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostsText = "";
    renderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostsText = newText;
    renderEntireTree(state);
}
export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;