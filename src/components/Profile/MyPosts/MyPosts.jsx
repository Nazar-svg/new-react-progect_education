import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
const MyPosts = () => {
  return (<div>
       <h1>my post</h1> 
       <input type="text" placeholder="new Coments" className={classes.search}/>
       <Post  message = 'what, you doing?'/>
       <Post  message = 'what, you problem?'/>
    </div>);
}

export default MyPosts;