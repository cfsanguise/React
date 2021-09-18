import React from 'react';
import styles from './Send.module.css';
import { sendMessageCreator } from '../../redux/state';
import { updateMessageTextCreator } from '../../redux/state';

const MessageTextArea = (props) => {
    console.log(props);
    const messageTextarea = React.createRef();

    const addMessage = () => {
      props.store.dispatch(sendMessageCreator());
      messageTextarea.current.value = '';
    }

    const onTextareaChange = () => {
      const text = messageTextarea.current.value;
      props.store.dispatch(updateMessageTextCreator(text));
    }
    return(
      <div className={styles.user_send}>
        <textarea onChange={onTextareaChange} ref={messageTextarea} placeholder='write your message' className={styles.posts_textarea} value={props.currentPostText}/>
        <button onClick={addMessage} className={styles.posts_send} type='button'>Send</button>
      </div>);
} 

export default MessageTextArea;