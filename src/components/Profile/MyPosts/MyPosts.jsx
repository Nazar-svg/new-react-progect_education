import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
const MyPosts = ({ state }) => {
  const postElements = state.posts
    .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
  return (
    <div>
      <h1>my post</h1>
      <input type="text" placeholder="new Coments" className={classes.search} />
      {postElements}
    </div>
  );
}

export default MyPosts;