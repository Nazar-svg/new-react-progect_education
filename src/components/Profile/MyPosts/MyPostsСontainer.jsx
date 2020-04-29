import React from 'react';

import { updateNewPostTextActionCreater, addPostActionCreater } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
const MyPostsContainer = ({ profilePage, dispatch, newPostsText }) => {
  const addPost = () => {
    dispatch(addPostActionCreater());
  }
  const newPostChange = (text) => {
    let action = updateNewPostTextActionCreater(text);
    dispatch(action);
  }
  return (<MyPosts
    updateNewPostText={newPostChange}
    addPost={addPost} profilePage={profilePage} newPostsText={newPostsText} />)

}
export default MyPostsContainer;