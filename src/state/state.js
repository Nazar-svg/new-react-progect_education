
const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'what, you doing?', likesCount: '7' },
            { id: 2, message: 'what, you problem?', likesCount: '12' }
        ]
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
            { id: 1, post: 'Hi!!' },
            { id: 2, post: 'What you doing todey?' },
            { id: 3, post: 'Yo' },
            { id: 4, post: 'Yo' }
        ]
    }
}
export default state;