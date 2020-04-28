import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import { updateNewPostTextActionCreater, addPostActionCreater } from '../../../state/profileReducer';
const MyPosts = ({ profilePage, dispatch, newPostsText }) => {
  let newPostElement = React.createRef();
  const postElements = profilePage.posts
    .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
  const addPosts = () => {
    dispatch(addPostActionCreater());
  }
  const newPostChange = () => {
    const Text = newPostElement.current.value;
    dispatch(updateNewPostTextActionCreater(Text));
  }
  return (
    <div>
      <h1>my post</h1>
      <div>
        <textarea onChange={newPostChange}
          value={newPostsText}
          ref={newPostElement}
          className={classes.search} />
      </div>
      <div>
        <button
          className={classes.button}
          onClick={addPosts}
        >Add Posts</button>
      </div>
      {postElements}
    </div>
  );
}

export default MyPosts;