import React from 'react';
import styles from './Header.module.css';
import logo from '../.././img/logo.png';

const Header = () => {
    return(<header className={styles.header}>
            <img alt='logo' src={logo} />
           </header>
        
    );
}

export default Header;