import React from 'react';
import MyPosts from './MyPosts';
import Post from './Post/Post';
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
      posts: state.profilePage.posts.map(e => <Post smallPhoto={state.profilePage.profile.photos.small} key={getRandomInt(500) + e.likes ** 3 - 13 + 'index'} message={e.message} likes={e.likes} />),
      currentMessageText: state.profilePage.currentPostText,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      addPost: currentPostText => {dispatch(addPostActionCreator(currentPostText)); scroll()},
  }    
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;