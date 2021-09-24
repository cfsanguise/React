import React from 'react';
import styles from './Send.module.css';

const PostTextarea = (props) => {
    const postTextarea = React.createRef();

    const addPost = () => {
      props.addPost();
      postTextarea.current.value = '';
    }

    const onTextareaChange = () => {
      const text = postTextarea.current.value;
      props.onTextareaChange(text);
    }
    return(
      <div className={styles.user_send}>
        <textarea onChange={onTextareaChange} ref={postTextarea} placeholder='write your post' className={styles.posts_textarea} value={props.currentPostText}/>
        <button onClick={addPost} className={styles.posts_send} type='button'>Send</button>
      </div>);
} 

export default PostTextarea;