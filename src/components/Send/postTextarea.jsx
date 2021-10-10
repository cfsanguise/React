import React from 'react';
import styles from './Send.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import {Textarea} from '../Common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const PostTextarea = (props) => {

    const onSubmit = (e) => {
      e.preventDefault();
      props.handleSubmit();
    }
    
    return(
    <form onSubmit={onSubmit}>
       <div className={styles.user_send}>
        <Field validate={[required, maxLength10]} component={Textarea} name='postText' type='text' placeholder='write your post' className={styles.posts_textarea} value={props.currentPostText}/>
        <button className={styles.posts_send} type='submit'>Send</button>
      </div>
    </form> );
} 

const PostForm = reduxForm({form: 'post'})(PostTextarea);

export default PostForm;