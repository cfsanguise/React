import React from 'react';
import styles from './Send.module.css';
import { updateNewPostTextCreator } from '../../redux/state';
import { addPostActionCreator } from '../../redux/state';

const MessageTextArea = (props) => {
    console.log(props);
    const postTextarea = React.createRef();

    const addPost = () => {
      props.state.dialogsPage.dispatch(addPostActionCreator());
    }

    const onTextareaChange = () => {
      const text = postTextarea.current.value;
      props.state.dialogsPage.dispatch(updateNewPostTextCreator(text));
    }
    return(
      <div className={styles.user_send}>
        <textarea onChange={onTextareaChange} ref={postTextarea} placeholder='write your post' className={styles.posts_textarea} value={props.currentPostText}/>
        <button onClick={addPost} className={styles.posts_send} type='button'>Send</button>
      </div>);
} 

export default MessageTextArea;