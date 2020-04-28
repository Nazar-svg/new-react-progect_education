const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST: const newPost = {
            id: Math.random(),
            message: state.newPostsText,
            likesCount: 0
        }
            state.posts.push(newPost);
            state.newPostsText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostsText = action.newText;
            return state;
        default:
            return action;
    }
}
export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (Text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: Text });

export default profileReducer;