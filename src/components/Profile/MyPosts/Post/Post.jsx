import React from 'react';
import classes from './Post.module.css';
import img from './_PRO6169.JPG';
import like from './heart.svg';
const Post = ({message, likesCount }) => {
  return (
  <div className={classes.post}>
    <img className={classes.images} src={img}/>
    {message}
    <button><img className={classes.like} src={like} alt="like"/></button>
    {likesCount}
  </div>
  );
}

export default Post;