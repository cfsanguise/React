import React from 'react';
import styles from './Contact.module.css';
import {NavLink} from 'react-router-dom';

const Contact = (props) => {
    let path = '/dialogs/' + props.id ;
    return (
        <li className={styles.navlink}><NavLink activeClassName={styles.active} className={styles.chats_contact} to={path}>{props.name}</NavLink></li>
    );
}

export default Contact;