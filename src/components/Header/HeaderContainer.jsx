import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { toggleIsFetching, signIn } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

    sighIn = () => {
        this.props.signIn();
    }

    render() {
        return <Header signIn={this.sighIn} {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        id: state.auth.userId,
        login: state.auth.login,
        email: state.auth.email,
        messages: state.auth.messages,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {toggleIsFetching, signIn}) (HeaderContainer);