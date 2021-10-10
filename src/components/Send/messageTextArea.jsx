import React from 'react';
import { reduxForm, Field } from 'redux-form';
import styles from './Send.module.css';
import {Textarea} from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength10 = maxLengthCreator(400);


const MessageTextArea = props => {

    const handleSubmit = e => {
      e.preventDefault();
      props.handleSubmit();
    }

    return(
      <form onSubmit={handleSubmit}>
        <div className={styles.user_send}>
          <Field validate={[required, maxLength10]} component={Textarea} type='text' name='messageText' placeholder='write your message' className={styles.posts_textarea} value={props.currentPostText}/>
          <button className={styles.posts_send}>Send</button>
        </div>
      </form>
      );
} 

const MessageForm = reduxForm({form: 'message'})(MessageTextArea);

export default MessageForm;