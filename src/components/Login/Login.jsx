import React from 'react';
import styles from './Login.module.css';
import LoginReduxForm from './LoginForm';
import {signUp} from '../../redux/authReducer';

const Login = () => {

    const onSubmit = formData => {
        console.log(formData);
        
    }

    const handleSubmit = () => {
        console.log('jordan')
    }

    return (
        <div className={styles.login_form_wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} handleSubmit={handleSubmit} />
        </div>
    )
}

export default Login;