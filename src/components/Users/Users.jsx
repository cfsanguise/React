import React from 'react';
import User from './User/User';
import styles from './Users.module.css';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    if (pagesCount > 20 ) {
        pagesCount = 20;
    }

    let pages = [];

    for (let i = 1; i<= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.users_pages}>
                {pages.map(page => <span onClick={() => props.setCurrentPage(page)} className={props.currentPage === page ? `${styles.user_page} + '' + ${styles.selected}`: styles.user_page }>{page}</span>)}
            </div>
            {props.users.map(user => <User isFollowingInProgress={props.isFollowingInProgress} key={user.id} follow={props.follow} unfollow={props.unfollow} id={user.id} name={user.name} status={user.status}  avatar={user.photos.small} followed={user.followed} />)}
            <div className={styles.show_more_container}>
                <button className={styles.show_more} onClick={props.getUsers}>
                    Show more
                </button>
             </div>
        </div>
    )
}

export default Users;