import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { toggleIsFetching } from '../../redux/profileReducer';
import Preloader from '../Common/Preloader/Preloader';
import { withRouter } from 'react-router';
import { getProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import { WithAuthRedirect } from '../Hoc/WithAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        let userId = this.props.match.params.userId;

        if (!this.props.match.params.userId) {
            userId = 19816;
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);

    }

    render () { 
        if (this.props.isFetching) {
            return <Preloader width='100%' />
        } else {
            return <Profile {...this.props} userId={this.props.match.params.userId} />
        }
    }
}

const mapStateToProps = state => {
    return {
        fullName: state.profilePage.profile.fullName,
        lookingForAJob: state.profilePage.profile.lookingForAJob,
        github: state.profilePage.profile.github,
        bigPhoto: state.profilePage.profile.photos.big,
        smallPhoto: state.profilePage.profile.photos.small,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status
    }
};


export default  compose(connect(mapStateToProps, {Profile, getProfile, getStatus, updateStatus, toggleIsFetching}), withRouter, WithAuthRedirect)(ProfileContainer);