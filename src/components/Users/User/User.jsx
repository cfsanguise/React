import React from 'react';
import styles from './User.module.css';
import anonimus from '../../../img/anonimus.jpg';
import { NavLink } from "react-router-dom";

const User = (props) => {

    const follow = () => {
        props.follow(props.id);
    }

    const unfollow = () => {
        props.unfollow(props.id);
    }

    return ( 
    <div className={styles.user}>
        <div className={styles.user_avatar}>
            <NavLink to={'/profile/' + props.id}>
                <img src={props.avatar ? props.avatar: anonimus} alt="avatar" />
            </NavLink>
            {props.followed ? 
            <button onClick={() => 
                unfollow()} disabled={props.isFollowingInProgress.some(id => id === props.id)} className={`${styles.user_follow} ${styles.user_unfollow}`}>Unfollow</button>  
            : <button onClick={() => follow()} disabled={props.isFollowingInProgress.some(id => id === props.id)} className={styles.user_follow}>Follow</button>  }
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