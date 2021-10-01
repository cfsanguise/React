import React from "react";
import styles from './Preloader.module.css';

const Preloader = (props) => {
    return <div style={{width: props.width}} className={styles.container}><img src={'https://i.stack.imgur.com/ATB3o.gif'} alt='loader' className={styles.loading} /></div>
};

export default Preloader;