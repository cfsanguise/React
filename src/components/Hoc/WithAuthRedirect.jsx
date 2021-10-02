import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = state => {
    return {
        isAuth: state.auth.isAuth
    }
};

export const WithAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }

    const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent);

    return ConnectedRedirectComponent;
}

export default WithAuthRedirect;