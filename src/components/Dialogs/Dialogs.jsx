import React from 'react';
import MessageForm from '../Send/MessageTextArea';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

    const addMessage = values => {
        props.addMessage(values.messageText);
        values.messageText = '';
    }

    return (
        <div className={styles.dialogs_wrapper}>
            <div className={styles.contacts}>
               <h2 className={styles.header}>DIALOGS</h2> 
                <ul className={styles.chats}>
                    {props.dialogs}
                </ul>
            </div>
            <div className={styles.chat_wrapper}>
                <div className={styles.message_wrapper}>
                    {props.messages}
                </div>
                <MessageForm onSubmit={addMessage} />
            </div>
        </div>
    );
}

export default Dialogs;