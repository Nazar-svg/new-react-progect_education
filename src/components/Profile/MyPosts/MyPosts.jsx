import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = ({ profilePage, newPostsText, updateNewPostText, addPost }) => {
  let newPostElement = React.createRef();
  const postElements = profilePage.posts  
    .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
  const onAddPosts = () => {
   addPost();
  }
  const newPostChange = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text);
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
          onClick={onAddPosts}
        >Add Posts</button>
      </div>
      {postElements}
    </div>
  );
}

export default MyPosts;