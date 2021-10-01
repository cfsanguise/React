import React from 'react';
import styles from './Header.module.css';
import logo from '../.././img/logo.png';
import { NavLink } from 'react-router-dom';
import Preloader from '../Common/Preloader/Preloader';

const Header = (props) => {
    console.log(props);
    return(<header className={styles.header}>
            <img alt='logo' src={logo} />
            <div className={styles.login_block}>
                {props.isFetching ? <Preloader /> : null}
                {props.isAuth ? 
                    <div>
                        <div className={styles.email}>{props.email}</div>
                        <div className={styles.login}>{props.login}</div>
                        <div className={styles.userId}>{props.id}</div>
                    </div>  
                    : <NavLink onClick={props.signIn} to={'/login'}>Sign In</NavLink>}
            </div>
           </header>
        
    );
}

export default Header;