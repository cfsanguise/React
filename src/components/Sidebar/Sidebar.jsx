import React from 'react';
import styles from './Sidebar.module.css';

console.log(styles);

const Sidebar = () => {
    return(<nav className={styles.sidebar}>
            <div className={styles.sidebar_link}><a href='#s'>Profile</a></div>
            <div className={styles.sidebar_link}><a href='#s'>Messages</a></div>
            <div className={styles.sidebar_link}><a href='#s'>News</a></div>
            <div className={styles.sidebar_link}><a href='#s'>Music</a></div>
            <div className={styles.sidebar_link}><a href='#s'>Settings</a></div>
          </nav>
    );
}

export default Sidebar;