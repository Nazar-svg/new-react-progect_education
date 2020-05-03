const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        { id: 1, message: 'what, you doing?', likesCount: '7' },
        { id: 2, message: 'what, you problem?', likesCount: '12' }
    ],
    newPostsText: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: Math.random(),
                message: state.newPostsText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostsText: "",
            };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostsText: action.newText
            };
        }
        default:
            return state;
    }
}
export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (Text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: Text });

export default profileReducer;