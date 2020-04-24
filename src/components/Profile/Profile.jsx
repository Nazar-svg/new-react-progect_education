import React from 'react';
import MyPosts from '../Profile/MyPosts/MyPosts';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = ({ profilePage, addPost, updateNewPostText }) => {
  return (<div>
    <ProfileInfo />
    <MyPosts
      updateNewPostText={updateNewPostText}
      addPost={addPost}
      newPostsText={profilePage.newPostsText}
      profilePage={profilePage} />
  </div>);
}

export default Profile;