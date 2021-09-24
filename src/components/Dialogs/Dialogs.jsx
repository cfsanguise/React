import React from 'react';
import MessageTextArea from '../Send/MessageTextArea';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

    return (
        <div className={styles.dialogs_wrapper}>
            <div className={styles.contacts}>
               <h2 className={styles.header}>DIALOGS</h2> 
                <ul className={styles.chats}>
                    {props.dialogs}
                </ul>
            </div>
            <div className={styles.chat_wrapper}>
                <div className="message_wrappe">
                    {props.messages}
                </div>
                <MessageTextArea onTextareaChange={props.onTextareaChange} addMessage={props.addMessage}  />
            </div>
        </div>
    );
}

export default Dialogs;