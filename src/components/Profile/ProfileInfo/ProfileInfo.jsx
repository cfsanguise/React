import React from 'react';
import styles from './Profile.module.css';
import image from '../../.././img/image.jpg';
import anonimus from '../../../img/anonimus.jpg';


const ProfileInfo = (props) => {

    return( <div>
        <div className={styles.profile_img}><img alt='img' src={image} /></div>
        <div className={styles.profile_user}>
            <div className={styles.user_avatar}><img alt='avatar' src={props.bigPhoto ? props.bigPhoto : anonimus} /></div>
            <div className={styles.user_data}>
                <h2 className={styles.user_name}>{props.fullName}</h2>
                <h2>{props.aboutMe ? props.aboutMe : 'I am a developer'}</h2>
                <h3>{props.lookingForAJob ? 'Looking for a job': 'Employed'}</h3>
                <h3>{`My github: ${props.github ? props.github : 'No github'}`}</h3>
            </div>
        </div>
        </div>);
}

export default ProfileInfo;