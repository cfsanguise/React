import React from 'react';
import styles from './Send.module.css';
import { Field, reduxForm } from 'redux-form';

const PostTextarea = (props) => {
    const postTextarea = React.createRef();

    const addPost = () => {
      props.addPost();
    }

    const onTextareaChange = () => {
      const text = postTextarea.current.value;
      props.onTextareaChange(text);
    }
    return(
      <div className={styles.user_send}>
        <Field component={'textarea'} name='postText' type='text' onChange={onTextareaChange} ref={postTextarea} placeholder='write your post' className={styles.posts_textarea} value={props.currentPostText}/>
        <button onClick={addPost} className={styles.posts_send} type='button'>Send</button>
      </div>);
} 

const PostForm = reduxForm({form: 'login'})(PostTextarea);

export default PostForm;