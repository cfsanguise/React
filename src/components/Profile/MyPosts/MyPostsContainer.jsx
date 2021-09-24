import React from 'react';
import MyPosts from './MyPosts';
import Post from './Post/Post';
import { updateNewPostTextCreator } from '../../../redux/profileReducer';
import { addPostActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function scroll() {
  setTimeout(() => {
      window.scrollTo(0,document.body.scrollHeight);
  }, 100)
}

const mapStateToProps = (state) => {
  return {
      posts: state.profilePage.posts.map(e => <Post key={getRandomInt(500) + e.likes ** 3 - 13 + 'index'} message={e.message} likes={e.likes} />),
      currentMessageText: state.profilePage.currentPostText
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      addPost: () => {dispatch(addPostActionCreator()); scroll()},
      onTextareaChange: (text) => dispatch(updateNewPostTextCreator(text))

  }    
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;