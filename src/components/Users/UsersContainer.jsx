import React from 'react';
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) =>{
  return {
    users: state.usersPage.users
  }
}
const mapDispachToProps = (dispatch) => {
  return{
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users)); 
    }
  }
}


const UsersContainer = connect(mapStateToProps, mapDispachToProps) (Users);
export default UsersContainer;