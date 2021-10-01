import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setUserData, toggleIsFetching } from '../../redux/authReducer';
import axios from 'axios';

class HeaderContainer extends React.Component {

    sighIn = () => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                this.props.toggleIsFetching(false);
                const {id, login, email} = response.data.data;
                this.props.setUserData(id, login, email, true);
            } else {this.props.toggleIsFetching(false);}
        });
    }

    render() {
        return <Header signIn={this.sighIn} {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.userId,
        login: state.auth.login,
        email: state.auth.email,
        messages: state.auth.messages,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setUserData, toggleIsFetching}) (HeaderContainer);