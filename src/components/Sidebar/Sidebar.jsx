import React from 'react';
import styles from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

console.log(styles);

const Sidebar = () => {
    return(<nav className={styles.sidebar}>
            <div className={styles.sidebar_link}><NavLink activeClassName={styles.active} to='/profile'>Profile</NavLink></div>
            <div className={styles.sidebar_link}><NavLink activeClassName={styles.active} to='/dialogs'>Messages</NavLink></div>
            <div className={styles.sidebar_link}><NavLink activeClassName={styles.active} to='/news'>News</NavLink></div>
            <div className={styles.sidebar_link}><NavLink activeClassName={styles.active} to='/music'>Music</NavLink></div>
            <div className={styles.sidebar_link}><NavLink activeClassName={styles.active} to='/settings'>Settings</NavLink></div>
          </nav>
    );
}

export default Sidebar;