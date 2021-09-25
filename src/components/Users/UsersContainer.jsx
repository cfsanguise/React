import React from 'react';
import { followAc, unfollowAc, setUsersAc, setCurrentPageAc, setTotalCountAc } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';

function scroll() {
    setTimeout(() => {
        window.scrollTo(0,document.body.scrollHeight);
    }, 100)
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: userId => dispatch(followAc(userId)),
        unfollow: userId => dispatch(unfollowAc(userId)),
        setUsers: users => dispatch(setUsersAc(users)),
        setCurrentPage: page => dispatch(setCurrentPageAc(page)),
        setTotalCount: num => dispatch(setTotalCountAc(num))
    }    
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;