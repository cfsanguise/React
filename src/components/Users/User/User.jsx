import React from "react";
import styles from './User.module.css';
import anonimus from '../../../img/anonimus.jpg';

const User = (props) => {
    return ( 
    <div className={styles.user}>
        <div className={styles.user_avatar}>
            <img src={props.avatar ? props.avatar: anonimus} alt="avatar" />
            {props.followed ? <button onClick={() => props.unfollow(props.id)} className={`${styles.user_follow} ${styles.user_unfollow}`}>Unfollow</button>  : <button onClick={() => props.follow(props.id)} className={styles.user_follow}>Follow</button>  }
        </div>
        <div className={styles.user_info}>
            <div className={styles.user_fullname}>
                {props.name}
            </div>
            <div className={styles.user_status}>
                {props.status}
            </div>
            <div className={styles.user_country}>
                {"BAHAMAS"}
            </div>
            <div className={styles.user_city}>
                {"RIGA"}
            </div>
        </div>
    </div>

    )
}

export default User;