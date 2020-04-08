import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
const MyPosts = () => {
  let postData = [
    { id: 1, message: 'what, you doing?', likesCount: '7' },
    { id: 2, message: 'what, you problem?', likesCount: '12' }
  ];
  return (<div>
    <h1>my post</h1>
    <input type="text" placeholder="new Coments" className={classes.search} />
    <Post message={postData[0].message} likesCount='12' />
    <Post message={postData[1].message} likesCount='12' />
  </div>);
}

export default MyPosts;