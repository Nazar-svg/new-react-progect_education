import React from 'react';
import MyPosts from '../Profile/MyPosts/MyPosts';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = ({ profilePage, dispatch, updateNewPostText }) => {
  return (<div>
    <ProfileInfo />
    <MyPosts
      updateNewPostText={updateNewPostText}
      dispatch={dispatch}
      newPostsText={profilePage.newPostsText}
      profilePage={profilePage} />
  </div>);
}

export default Profile;