import React from 'react';
import MyPosts from '../Profile/MyPosts/MyPosts';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsСontainer';

const Profile = ({ profilePage, dispatch, updateNewPostText }) => {
  return (<div>
    <ProfileInfo />
    <MyPostsContainer
      updateNewPostText={updateNewPostText}
      dispatch={dispatch}
      profilePage={profilePage} />
  </div>);
}

export default Profile;