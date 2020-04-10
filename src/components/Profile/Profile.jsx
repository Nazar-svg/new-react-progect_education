import React from 'react';
import MyPosts from '../Profile/MyPosts/MyPosts';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = ({posts}) => {
  return (<div>
    <ProfileInfo />
    <MyPosts  posts={posts}/>
  </div>);
}

export default Profile;