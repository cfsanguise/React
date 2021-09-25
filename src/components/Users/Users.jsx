import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import * as axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                console.log('loading');
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount - 14750);
            });
        } else {}
    }

    setCurrentPage(page) {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i<= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={styles.users_pages}>
                    {pages.map(page => <span onClick={() => this.setCurrentPage(page)} className={this.props.currentPage === page ? `${styles.user_page} + '' + ${styles.selected}`: styles.user_page }>{page}</span>)}
                </div>
                {this.props.users.map(user => <User key={user.id} follow={this.props.follow} unfollow={this.props.unfollow} id={user.id} name={user.name} status={user.status}  avatar={user.photos.small} followed={user.followed} />)}
                <div className={styles.show_more_container}>
                    <button className={styles.show_more} onClick={this.getUsers}>
                        Show more
                    </button>
                </div>
            </div>
        )
    }
}
export default Users;