import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import * as axios from 'axios';

const Users = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            });
    
        } else {}
    }

    return (
        <div>
            {props.users.map(user => <User key={user.id} follow={props.follow} unfollow={props.unfollow} id={user.id} name={user.name} status={user.status}  avatar={user.photos.small} followed={user.followed} />)}
            <div className={styles.show_more_container}>
                <button className={styles.show_more} onClick={getUsers}>
                    Show more
                </button>
            </div>
        </div>
    )
}

export default Users;