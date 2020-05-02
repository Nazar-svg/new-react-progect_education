import React from 'react';
import { connect } from "react-redux";
import { updateNewPostTextActionCreater, addPostActionCreater } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) =>{
  return {
    profilePage: state.profilePage,
    newPostsText: state.profilePage.newPostsText
  }
}
const mapDispachToProps = (dispatch) => {
  return{
    addPost: () => {
      dispatch(addPostActionCreater());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreater(text))
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispachToProps) (MyPosts);
export default MyPostsContainer;