import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return(<div className={styles.posts}>
      <h1>Posts</h1>
      <div className={styles.user_send}>
        <textarea placeholder='write your post' className={styles.posts_textarea}></textarea>
        <button className={styles.posts_send} type='button'>Send</button>
      </div>
      <div className={styles.posts_wrapper}>
        <Post message='A meme of the day' likes='5' />
        <Post message='Oru' likes='20' />
      </div>
    </div>);
}

export default MyPosts;