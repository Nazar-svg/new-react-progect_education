import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
const MyPosts = ({ profilePage, dispatch, newPostsText, updateNewPostText }) => {
  let newPostElement = React.createRef();
  const postElements = profilePage.posts
    .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
  const addPosts = () => {
    dispatch({ type: 'ADD-POST'});
  }
  const newPostChange = () => {
    const Text = newPostElement.current.value;
    let action = ({ type: 'UPDATE-NEW-POST-TEXT', newText: Text } );
    dispatch(action);
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