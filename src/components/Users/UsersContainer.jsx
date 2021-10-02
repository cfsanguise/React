import React from 'react';
import { setCurrentPage, toggleIsFollowingInProgress, getUsers, followUser, unfollowUser } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';
import WithAuthRedirect from '../Hoc/WithAuthRedirect';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
    } 

    follow = (id) => {
        this.props.followUser(id);
    }

    unfollow = (id) => {
        this.props.unfollowUser(id);
    }

    render() {
        return ( <>
            {this.props.isFetching ? <Preloader /> : null }
            <Users isFollowingInProgress={this.props.isFollowingInProgress} getUserProfile={this.getUserProfile} setCurrentPage={this.setCurrentPage} follow={this.follow} unfollow={this.unfollow} users={this.props.users} getUsers={this.props.getUsers} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} />
            </>
            )
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
};


export default compose(connect(mapStateToProps, {followUser, setCurrentPage, getUsers: getUsers, toggleIsFollowingInProgress, unfollowUser}), WithAuthRedirect)(UsersContainer);