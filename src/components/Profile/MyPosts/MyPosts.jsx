import React from 'react';
import PostTextarea from '../../Send/PostTextarea';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let Posts = props.posts.posts.map(e => <Post key={getRandomInt(500) + e.likes ** 3 - 13 + 'index'} message={e.message} likes={e.likes} />);

    return(<div className={styles.posts}>
      <h1>Posts</h1>
      <PostTextarea dispatch={props.dispatch} currentPostText={props.currentPostText}/>
      <div className={styles.posts_wrapper}>
        {Posts}
      </div>
    </div>);
}

export default MyPosts;