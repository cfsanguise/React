import React from 'react';
import PostTextarea from '../../Send/PostTextarea';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {

    return(<div className={styles.posts}>
      <h1>Posts</h1>
      <PostTextarea onTextareaChange={props.onTextareaChange} addPost={props.addPost} currentPostText={props.currentMessageText}/>
      <div className={styles.posts_wrapper}>
        {props.posts}
      </div>
    </div>);
}

export default MyPosts;