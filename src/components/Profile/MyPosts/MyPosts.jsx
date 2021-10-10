import React from 'react';
import PostForm from '../../Send/PostTextarea';
import styles from './MyPosts.module.css';

class MyPosts extends React.Component {

    addPost = values => {
      this.props.addPost(values.postText);
      values.postText = '';
    }

    render() {
      return (<div className={styles.posts}>
        <h1>Posts</h1>
        <PostForm onSubmit={this.addPost} />
        <div className={styles.posts_wrapper}>
          {this.props.posts}
        </div>
      </div>)
    }
}

export default MyPosts;