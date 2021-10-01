import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching, toggleIsFollowingInProgress } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {usersAPI} from '../../api/api';

class UsersContainer extends React.Component {

    componentDidMount() {

        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            });;
            
        } else {}
    }

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });;
    } 

    follow = (id) => {
        this.props.toggleIsFollowingInProgress(true, id);
        usersAPI.followUnfollow('follow', id).then(data => {
            if (data.resultCode === 0) {
                this.props.follow(id);
                this.props.toggleIsFollowingInProgress(false, id);
            }
        }).finally(response => this.props.toggleIsFollowingInProgress(false, id));
        
    }

    unfollow = (id) => {
        this.props.toggleIsFollowingInProgress(true, id);
        usersAPI.followUnfollow('unfollow', id).then(data => {
            if (data.resultCode === 0) {
                this.props.unfollow(id);
                this.props.toggleIsFollowingInProgress(false, id);
            }
            
        }).finally(response => this.props.toggleIsFollowingInProgress(false, id));
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching, toggleIsFollowingInProgress
}    ) (UsersContainer);