import React from 'react';
import PostForm from '../../Send/PostTextarea';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {
    const onChange = formData => {
      console.log(formData);
    }

    return(<div className={styles.posts}>
      <h1>Posts</h1>
      <PostForm onChange={onChange} onTextareaChange={props.onTextareaChange} addPost={props.addPost} currentPostText={props.currentMessageText}/>
      <div className={styles.posts_wrapper}>
        {props.posts}
      </div>
    </div>);
}

export default MyPosts;