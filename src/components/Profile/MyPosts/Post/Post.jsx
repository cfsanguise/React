import React from 'react';
import styles from './Post.module.css';
import avatar from '../../../../img/dog.jpg';

const Post = (props) => {
    return(<div className={styles.post}>
            <div className={styles.avatar}><img alt='avatar' src={avatar}></img></div>
            <div className={styles.post_text}>{props.message}</div>
            <div className={styles.post_like}><span>{props.likes}</span><a href="https://www.freeiconspng.com/img/39121" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/youtube-like-button-png-11.png" width="25" alt="Youtube Like Button Png" /></a></div>
          </div>);
}

export default Post;