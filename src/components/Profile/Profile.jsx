import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return(<main>
            <ProfileInfo />
            <MyPosts dispatch={props.dispatch} posts={props.profilePage} currentPostText={props.profilePage.currentPostText} />
          </main>);
}

export default Profile;

