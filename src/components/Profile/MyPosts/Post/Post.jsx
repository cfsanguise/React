import React from 'react';
import styles from './Post.module.css';
import avatar from '../../../../img/dog.jpg';

const Post = () => {
    return(<div className={styles.post}>
            <div className={styles.avatar}><img alt='avatar' src={avatar}></img></div>
            <div className={styles.post_text}>Some shit</div>
          </div>);
}

export default Post;