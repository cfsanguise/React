import React from 'react';
import styles from './Message.module.css';
import ava from '../../.././img/dog.jpg';

const Message = (props) => {
    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <img src={ava} alt="ava" />
            </div>
            <div className={styles.message_name}>Sergiy</div>
            <div className={styles.message_box}>
                <div className={styles.message_wrapper}>
                    {props.message}
                </div>
            </div>
        </div>
    );
}

export default Message;