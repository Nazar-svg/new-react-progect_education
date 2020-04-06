import React from 'react';
import classes from './Post.module.css';
import img from './_PRO6169.JPG';
import like from './heart.svg';
const Post = (props) => {
  return (<div className={classes.post}>
    <img className={classes.images} src={img}/>
    {props.message}
    <button><img className={classes.like} src={like} alt="like"/></button>
  </div>);
}

export default Post;