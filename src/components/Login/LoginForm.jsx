import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="post" className={styles.login_form}>
                <div><Field name={'login'} component={'input'} type='text' className={styles.login} placeholder='login' /></div>
                <div><Field name={'password'} component={'input'} type='text' className={styles.password} placeholder='password' /></div>
                <div><Field name={'rememberMe'} component={'input'} className={styles.checkbox} type='checkbox' /> remember me</div>
                <div><button className={styles.signin_button}>Sign in</button></div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;

