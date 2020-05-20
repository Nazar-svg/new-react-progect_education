import React from 'react';
import MyPosts from '../Profile/MyPosts/MyPosts';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsСontainer';

const Profile = (props) => {
  return (<div>
    <ProfileInfo profile={props.profile} />
    <MyPostsContainer />
  </div>);
}

export default Profile;