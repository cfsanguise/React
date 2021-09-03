import React from 'react';
import styles from './Profile.module.css';
import image from '../.././img/image.jpg';
import avatar from '../.././img/dog.jpg';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(<main className={styles.profile}>
    <div className={styles.profile_img}><img alt='img' src={image} /></div>
    <div className={styles.profile_user}>
      <div className={styles.user_avatar}><img alt='avatar' src={avatar} /></div>
      <div className={styles.user_data}>
        <h2 className={styles.user_name}>Sergiy Nitsetskiy</h2>
        <h3>Date of Birth: 2 january</h3>
        <h3>City: Khmelnik</h3>
        <h3>Education: Electric wizard bursa</h3>
        <h3>Web Site: sntsky.electric</h3>
      </div>
    </div>
    <MyPosts />
  </main>);
}

export default Profile;