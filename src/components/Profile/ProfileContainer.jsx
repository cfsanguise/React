import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, toggleIsFetching } from '../../redux/profileReducer';
import Preloader from '../Common/Preloader/Preloader';
import axios from 'axios';
import { withRouter } from 'react-router';



class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        let userId = this.props.match.params.userId;

        if (!this.props.match.params.userId) {
            userId = 19816;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUserProfile(response.data);
        });

    }

    render () { 
        if (this.props.isFetching) {
            return <Preloader width='100%' />
        } else {
            return <Profile {...this.props} />
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
        aboutMe: state.profilePage.profile.aboutMe,
        isFetching: state.profilePage.isFetching
    }
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, toggleIsFetching}) (WithUrlDataContainerComponent)