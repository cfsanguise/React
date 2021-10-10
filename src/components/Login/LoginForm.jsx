import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLengthHunna = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="post" className={styles.login_form}>
                <div><Field validate={[required, maxLengthHunna]} name={'login'} component={Input} type='text' className={styles.login} placeholder='login' /></div>
                <div><Field validate={[required, maxLengthHunna]} name={'password'} component={Input} type='text' className={styles.password} placeholder='password' /></div>
                <div><Field name={'rememberMe'} component={Input} className={styles.checkbox} type='checkbox' /> remember me</div>
                <div><button className={styles.signin_button}>Sign in</button></div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;

