import React from 'react';
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersReducer';
import Users from './Users';


const mapStateToProps = (state) =>{
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage:  state.usersPage.currentPage 
  }
}
const mapDispachToProps = (dispatch) => {
  return{
    follow: (userId) => {
      console.log(userId)
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


const UsersContainer = connect(mapStateToProps, mapDispachToProps)(Users);
export default UsersContainer;