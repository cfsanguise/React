import React from 'react';
import { followAc, unfollowAc, setUsersAc } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';

function scroll() {
    setTimeout(() => {
        window.scrollTo(0,document.body.scrollHeight);
    }, 100)
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAc(userId)),
        unfollow: (userId) => dispatch(unfollowAc(userId)),
        setUsers: (users) => dispatch(setUsersAc(users)),
    }    
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;